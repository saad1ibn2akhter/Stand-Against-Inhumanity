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
import VolunteerRegistration from './components/Volunteer/VolunteerRegistration.jsx';
import Donate from './components/Donate/Donate.jsx';
import Flood from './components/Donate/Flood.jsx';
import Education from './components/Donate/Education.jsx';
import MemberDetails from './components/TeamMembeers/MemberDetails.jsx';
import Payment from './components/Donate/payment/Payment.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import AdminHome from './components/Dashboard/AdminHome.jsx';
import AllApplications from './components/Dashboard/AllApplications.jsx';
import AuthProvider from './components/Authprovider/AuthProvider.jsx';
import Register from './components/Authentication/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/bloodbank',
        element: <BloodBank></BloodBank>
      },
      {
        path: '/bloodbank/donateblood',
        element: <DonateBlood></DonateBlood>
      },
      {
        path: '/bloodbank/needblood',
        element: <NeedBlood></NeedBlood>
      },
      {
        path: '/donate/flood',
        element: <Flood></Flood>
      },
      {
        path: '/donate/education',
        element: <Education></Education>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/donate',
        element: <Donate></Donate>
      },
      {
        path: '/payment',
        element: <Payment></Payment>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/member',
        element: <MemberDetails></MemberDetails>
      },
      {
        path: '/volunteer',
        element: <VolunteerRegistration></VolunteerRegistration>
      },
      {
        path: `/bloodbank/needblood/:id`,
        element: <DistrictDetails></DistrictDetails>,

      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'adminHome',
            element: <AdminHome></AdminHome>
          },
          {
            path: 'allApplications',
            element: <AllApplications></AllApplications>
          },

        ],
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
