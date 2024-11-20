import HomePage from "../pages/home-page";
import ServiceListPage from "../pages/service-list-page";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/beauty",
    element: (
      <MainLayout>
        <ServiceListPage />
      </MainLayout>
    ),
  },
]);
