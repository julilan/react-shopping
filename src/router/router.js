import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import ProductsList from '../pages/ProductsList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/products',
    element: <ProductsList />,
  },
]);

export default router;
