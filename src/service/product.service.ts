import httpClient from "../setup/http-client";
import { Product } from "../controller/search/state";

class ProductServices {
  public static async searchProducts(query: string) {
    const result = await httpClient.get<Product[]>(
      `/products/search?query=${query}`
    );
    return result.data;
  }
}

export default ProductServices;
