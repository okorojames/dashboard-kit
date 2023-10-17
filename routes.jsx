import { Route } from "react-router-dom";
import {
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./src/layouts/AppLayout";
import Home from "./src/pages/home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="/overview" element={<Home />} />
    </Route>
  )
);
