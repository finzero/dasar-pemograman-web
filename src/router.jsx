import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/layout/DefaultLayout';
import Html from './pages/Html';
import Css from './pages/Css';
import Cheatsheet from './pages/Cheatsheet';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <div>404 not found</div>,
    children: [
      {
        path: 'html',
        element: <Html />,
      },
      {
        path: 'css',
        element: <Css />,
      },
      {
        path: 'cheatsheet',
        element: <Cheatsheet />,
      },
      {
        path: '/',
        element: <Navigate to="/html" replace />,
      },
    ],
  },
]);

export default router;
