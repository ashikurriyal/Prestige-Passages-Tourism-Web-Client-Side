import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import AuthProviders from './Providers/AuthProviders';
import { HelmetProvider } from 'react-helmet-async';
import Login from './Components/Login';
import Register from './Components/Register';
import AllTouristsSpot from './Components/AllTouristsSpot';
import PrivateRoutes from './Routes/PrivateRoutes';
import AddTouristsSpot from './Components/AddTouristsSpot';
import MyList from './Components/MyList';
import DetailsTouristSpot from './Components/DetailsTouristSpot';
import UpdateSpot from './Components/UpdateSpot';
import CountriesCard from './Components/CountriesCard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://prestige-passages-server.vercel.app/place')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/alltouristspot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch(`https://prestige-passages-server.vercel.app/place`)
      },
      {
        path: '/addtouristsspot',
        element: <PrivateRoutes><AddTouristsSpot></AddTouristsSpot></PrivateRoutes>
      },
      {
        path: '/mylist/:email',
        element: <PrivateRoutes><MyList></MyList></PrivateRoutes>,
        loader: ({params}) => fetch(`https://prestige-passages-server.vercel.app/myList/${params.email}`)
      },
      {
        path: '/spot/:id',
        element: <PrivateRoutes><DetailsTouristSpot></DetailsTouristSpot></PrivateRoutes>,
        loader: ({params}) => fetch(`https://prestige-passages-server.vercel.app/place/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoutes><UpdateSpot></UpdateSpot></PrivateRoutes>,
        loader: ({params}) => fetch(`https://prestige-passages-server.vercel.app/place/${params.id}`)
      },
      {
        path: '/country/:country_Name',
        element: <CountriesCard></CountriesCard>,
        loader: ({params}) => fetch(`https://prestige-passages-server.vercel.app/country/${params.country_Name}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>,
)
