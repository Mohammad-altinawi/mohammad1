import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './index.css';
import Mainpage from './components/Mainpage.jsx';
import Description from './components/Description.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/page2",
    element: <Description />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <nav>
        <Link to="/">Main Page</Link>
        <Link to="/page2">Description Page</Link>
      </nav>
    </RouterProvider>
  </StrictMode>
);

