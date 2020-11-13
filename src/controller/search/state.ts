export interface Product {
  id: number;
  brand: string;
  description: string;
  image: string;
  price: number;
  referencePrice: number;
}

interface State {
  keyword: string;
  products: Product[];
}

export default State;
