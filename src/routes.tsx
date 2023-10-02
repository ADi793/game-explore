import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <h2>Welcome to implement routing here...</h2> },
    ],
  },
]);

export default router;
