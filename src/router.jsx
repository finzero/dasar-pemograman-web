import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/layout/DefaultLayout';
import { lazy, Suspense } from 'react';
import Loading from './pages/Loading';

const delaySuspense = (compPath) => {
  return lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import(compPath)), 500);
    });
  });
};

const Html = delaySuspense('./pages/Html');
const Css = delaySuspense('./pages/Css');
const Cheatsheet = delaySuspense('./pages/Cheatsheet');

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
