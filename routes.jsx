import { Route } from "react-router-dom";
import {
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./src/layouts/AppLayout";
import Home from "./src/pages/home/Home";
import Tickets from "./src/pages/tickets/Tickets";
import PageNotFound from "./src/pages/page-not-found/PageNotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="overview" element={<Home />} />
      <Route path="tickets" element={<Tickets />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
