// import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'

// const container = document.getElementById('root') as HTMLDivElement
// const root = createRoot(container)

// root.render(<App />)
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  
  import React from "react";
  import ReactDOM from "react-dom/client";
import Dadep from 'components/Dadep';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },

    {
        path: "/dep-da-dep-dang",
        element: <Dadep />
      },
  ]);
  
  const root = document.getElementById("root");
  
  ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
  );
  
