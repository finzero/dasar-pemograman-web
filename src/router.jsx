import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/layout/DefaultLayout';
import { lazy, Suspense } from 'react';
import Loading from './pages/Loading';
import Javascript from './pages/Javascript';

const Html = lazy(() => import('./pages/Html'));
const Css = lazy(() => import('./pages/Css'));
const Cheatsheet = lazy(() => import('./pages/Cheatsheet'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <div>404 not found</div>,
    children: [
      {
        path: 'html',
        element: (
          <Suspense fallback={<Loading />}>
            <Html />
          </Suspense>
        ),
      },
      {
        path: 'css',
        element: (
          <Suspense fallback={<Loading />}>
            <Css />
          </Suspense>
        ),
      },
      {
        path: 'javascript',
        element: (
          <Suspense fallback={<Loading />}>
            <Javascript />
          </Suspense>
        ),
      },
      {
        path: 'cheatsheet',
        element: (
          <Suspense fallback={<Loading />}>
            <Cheatsheet />
          </Suspense>
        ),
      },
      {
        path: '/',
        element: <Navigate to="/html" replace />,
      },
    ],
  },
]);

export default router;
