export interface iProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface iProductState {
  products: iProduct[];
  loading: boolean;
  error: any;
}
