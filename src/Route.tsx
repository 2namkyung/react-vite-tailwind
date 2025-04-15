import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/Layout';
import NotFound from '@/components/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [{}],
  },
]);
