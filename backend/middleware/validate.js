/** Small, dependency-light validation & sanitization helpers. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isEmail = (v) => typeof v === 'string' && v.length <= 254 && EMAIL_RE.test(v.trim());

/** Trim + hard length cap; returns '' for non-strings. */
export const clampStr = (v, max) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

/** Escape HTML entities before interpolating user input into email HTML. */
export const escapeHTML = (v = '') =>
  String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** Reject objects/arrays smuggled into string fields (NoSQL operator injection). */
export const asPlainString = (v) => (typeof v === 'string' ? v : '');
