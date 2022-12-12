import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import Container from './styled-components/Container';
import { router } from './routeRoot/Index';
import UserProvider from './contexts/useContext';
//import Background from './styled-components/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
  <Container>
   <RouterProvider router={router} />
    {/*<Background/>*/}
  </Container>
  </UserProvider>
);

