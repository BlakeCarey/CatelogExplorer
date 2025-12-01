import { http, HttpResponse } from "msw";
import { Products } from "./products.ts";
import { Categories } from "./categories.ts";

const productsInstance = new Products();
const categoriesInstance = new Categories();
export const handlers = [
  http.get("/api/products", () => {
    return HttpResponse.json(productsInstance.getAllProducts());
  }),
  http.get("/api/products/:id", ({ params }) => {
    const { id } = params;
    const product = productsInstance.getProductById(id as string);
    if (product) {
      return HttpResponse.json(product);
    }
    return new HttpResponse(null, { status: 404 });
  }),
  http.get("/api/categories", () => {
    return HttpResponse.json(categoriesInstance.getCategories());
  }),
];
