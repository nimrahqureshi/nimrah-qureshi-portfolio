import type { ReactNode } from 'react';

/**
 * Wraps standalone routed pages so their content clears the fixed navbar.
 * Home renders sections directly (Hero handles its own top padding), but
 * dedicated section pages need a little breathing room at the top.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  return <div className="pt-24 md:pt-28">{children}</div>;
}
