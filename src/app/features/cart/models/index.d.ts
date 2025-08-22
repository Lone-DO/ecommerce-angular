export interface iCartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface iCartState {
  items: iCartItem[];
}
