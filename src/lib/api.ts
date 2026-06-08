// Centralized API client for the Nimrah Qureshi portfolio frontend.
// Reads the backend base URL from VITE_API_URL (see .env.example).
// All form submissions and data fetching go through here so error
// handling, base URL, and headers stay consistent across the app.

const API_BASE_URL =
  (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') ||
  'http://localhost:5000/api';

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: unknown;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { body, headers, ...rest } = options;

  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...rest,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    // Network-level failure (server down, CORS, no connection)
    throw new ApiError(
      'Could not reach the server. Please check your connection and try again.',
      0,
    );
  }

  let data: unknown = null;
  const text = await response.text();
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  if (!response.ok) {
    const message =
      (data && typeof data === 'object' && 'message' in data
        ? String((data as { message: unknown }).message)
        : null) || `Request failed (${response.status})`;
    throw new ApiError(message, response.status);
  }

  return data as T;
}

// ---- Payload + response types ----

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
}

export interface ContactResponse {
  message: string;
  lead?: { _id: string };
}

export interface SubscribePayload {
  email: string;
  name?: string;
}

export interface SubscribeResponse {
  message: string;
}

// ---- Public API surface ----

export const api = {
  /** Submit the contact form. Persists a lead + triggers emails server-side. */
  submitContact: (payload: ContactPayload) =>
    request<ContactResponse>('/contact', { method: 'POST', body: payload }),

  /** Subscribe an email to the newsletter. */
  subscribe: (payload: SubscribePayload) =>
    request<SubscribeResponse>('/subscribers', { method: 'POST', body: payload }),

  /** Simple backend health probe. */
  health: () => request<{ status: string }>('/health'),
};

export { API_BASE_URL };
