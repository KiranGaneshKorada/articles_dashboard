import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.tsx'
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent.tsx';
import CountryRegion from './components/Mainbar/country_region/CountryRegion.tsx';
import SectorTopic from './components/Mainbar/sector_region/SectorTopic.tsx';
import YearBarCount from './components/Mainbar/timeline/YearBarCount.tsx';
import Correlation from './components/Mainbar/correlation/Correlation.tsx';
import NavbarComponent from './components/NavbarComponent.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "",
        element: <CountryRegion />,
      },
      {
        path: "country_region",
        element: <CountryRegion />,
      },
      {
        path: "sector_topic",
        element: <SectorTopic />,
      },
      {
        path: "timeline",
        element: <YearBarCount />,
      },
      {
        path: "correlation",
        element: <Correlation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavbarComponent />
    <RouterProvider router={router} />
  </React.StrictMode>
);
