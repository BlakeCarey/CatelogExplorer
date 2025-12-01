import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import SearchPage from "@/pages/SearchPage";
import SavedItemsPage from "@/pages/SavedItemsPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "*", element: <NotFoundPage /> },
  //   { path: "/product", element: <div>Product List</div> },
  { path: "/product/:id", element: <ProductDetailsPage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/saved", element: <SavedItemsPage /> },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
