import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "@/pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />

      {/* 404 Page */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

export default router;
