import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/RootLayout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Collections from './pages/Collections.tsx';
import Shop from './pages/Shop.tsx';
import Login from './pages/Login.tsx';
import ProductDetails from './pages/ProductDetails.tsx';
import ShopRootLayout from './pages/ShopRootLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element: <ShopRootLayout />,
        children: [
          {
            index: true,
            element: <Shop />,
          },
          {
            path: ':productId',
            element: <ProductDetails />,
          },
        ],
      },
      { path: 'collections', element: <Collections /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
