import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Chambres from './page/Chambres';
import Restaurant from './page/Restaurant';
import Activites from './page/Activites';
import Services from './page/Services';
import Location from './page/Location';
import Contacts from './page/Contacts';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/Chambres', element: <Chambres /> },
  { path: '/Restaurant', element: <Restaurant /> },
  { path: '/Activites', element: <Activites /> },
  { path: '/Services', element: <Services /> },
  { path: '/Location', element: <Location /> },
  { path: '/Contacts', element: <Contacts /> }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
