import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import RouteLoader from '@/components/layout/RouteLoader';

// Route-level code splitting: each page ships as its own chunk, so the
// first paint only downloads the code it needs.
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Projects = lazy(() => import('@/pages/Projects'));
const CaseStudies = lazy(() => import('@/pages/CaseStudies'));
const AITools = lazy(() => import('@/pages/AITools'));
const Blog = lazy(() => import('@/pages/Blog'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const Cookies = lazy(() => import('@/pages/Cookies'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<RouteLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="about" element={<Suspense fallback={<RouteLoader />}><About /></Suspense>} />
        <Route path="services" element={<Suspense fallback={<RouteLoader />}><Services /></Suspense>} />
        <Route path="projects" element={<Suspense fallback={<RouteLoader />}><Projects /></Suspense>} />
        <Route path="case-studies" element={<Suspense fallback={<RouteLoader />}><CaseStudies /></Suspense>} />
        <Route path="ai-tools" element={<Suspense fallback={<RouteLoader />}><AITools /></Suspense>} />
        <Route path="blog" element={<Suspense fallback={<RouteLoader />}><Blog /></Suspense>} />
        <Route path="pricing" element={<Suspense fallback={<RouteLoader />}><Pricing /></Suspense>} />
        <Route path="faq" element={<Suspense fallback={<RouteLoader />}><FAQ /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<RouteLoader />}><Contact /></Suspense>} />
        <Route path="privacy" element={<Suspense fallback={<RouteLoader />}><Privacy /></Suspense>} />
        <Route path="terms" element={<Suspense fallback={<RouteLoader />}><Terms /></Suspense>} />
        <Route path="cookies" element={<Suspense fallback={<RouteLoader />}><Cookies /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<RouteLoader />}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;
