import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import BloodBank from './components/BloodBank/BloodBank.jsx';
import About from './components/About/About.jsx';
import DonateBlood from './components/BloodBank/DonateBlood.jsx';
import NeedBlood from './components/BloodBank/NeedBlood.jsx';
import DistrictDetails from './components/BloodBank/DynamicDistricts/DistrictDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/bloodbank',
        element:<BloodBank></BloodBank>
      },
      {
        path:'/bloodbank/donateblood',
        element:<DonateBlood></DonateBlood>
      },
      {
        path:'/bloodbank/needblood',
        element:<NeedBlood></NeedBlood>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:`/bloodbank/needblood/:id`,
        element:<DistrictDetails></DistrictDetails>,
        
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
