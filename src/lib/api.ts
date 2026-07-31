// Centralized API client for the Nimrah Qureshi portfolio frontend.
// Reads the backend base URL from VITE_API_URL (see .env.example).
// All form submissions and data fetching go through here so error
// handling, base URL, and headers stay consistent across the app.

import { CONTACT_EMAIL } from './site';

// In development we default to the local backend. In production there is NO
// localhost fallback: if VITE_API_URL is missing, requests fail fast with a
// clear, actionable message instead of silently dialing the visitor's own
// machine over http from an https page.
const configured = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '');
const API_BASE_URL = configured || (import.meta.env.DEV ? 'http://localhost:5000/api' : '');

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
  if (!API_BASE_URL) {
    throw new ApiError(
      `The contact service is not configured yet. Please email me directly at ${CONTACT_EMAIL}.`,
      0,
    );
  }

  const { body, headers, ...rest } = options;

  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...rest,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError(
      `Could not reach the server. Please try again, or email me directly at ${CONTACT_EMAIL}.`,
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
  company?: string;
  subject?: string;
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

export interface ChatMessagePayload {
  role: 'user' | 'assistant';
  content: string;
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

  /** Whether a live LLM provider is configured server-side. */
  aiStatus: () => request<{ configured: boolean }>('/ai/status'),

  /** Real LLM chat completion (proxied through the backend). */
  aiChat: (messages: ChatMessagePayload[]) =>
    request<{ reply: string }>('/ai/chat', { method: 'POST', body: { messages } }),

  /** Real LLM generation for the AI Tools page. */
  aiGenerate: (tool: string, input: string) =>
    request<{ output: string }>('/ai/generate', { method: 'POST', body: { tool, input } }),
};

export { API_BASE_URL };
