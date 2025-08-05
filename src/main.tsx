import { createRoot } from 'react-dom/client';
import MainLayout from '@layouts/MainLayout/MainLayout';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import AboutUs from '@pages/AboutUs';
import Products from '@pages/Products';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';
import "@styles/global.css"
import { Provider } from 'react-redux';
import  store  from "@store/index";
import {persistor} from "@store/index";
import { PersistGate } from 'redux-persist/integration/react';
import './services/axios-global'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({ params }) =>{
            if(typeof params.prefix !== "string" || !/^[a-z]+$/.test(params.prefix)) {
                throw new Response("Bad Request",{statusText: "Category not found", status: 400});
            }
            return true;
        }
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
)
