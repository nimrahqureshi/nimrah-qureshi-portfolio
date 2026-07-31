import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode }
interface State { hasError: boolean }

/**
 * App-level error boundary — the SPA equivalent of a 500 page. Any uncaught
 * render error shows a branded recovery screen instead of a blank viewport.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught render error:', error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div style={{ minHeight: '100vh', background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 13, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#E1E0CC', marginBottom: 16 }}>
            Nimrah Qureshi
          </p>
          <h1 style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#fff', fontSize: 22, fontWeight: 500, marginBottom: 12 }}>
            Something went wrong
          </h1>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#9ca3af', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
            An unexpected error occurred while rendering this page. Reloading usually fixes it.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{ background: '#E1E0CC', color: '#000', border: 0, borderRadius: 999, padding: '12px 28px', fontFamily: 'Inter, system-ui, sans-serif', fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}
          >
            Reload page
          </button>
        </div>
      </div>
    );
  }
}
