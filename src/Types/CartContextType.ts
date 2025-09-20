import { ProductCart } from "./cart.type"

export interface CartContextType {
  numOfCart: number
  totalPrice: number
  products: ProductCart[]
  isLoading:boolean
  addProductToCart: (id: string) => Promise<any>;
  removeCartItem: (id: string) => Promise<any>;
  udateCart: (id: string,count:number) => Promise<any>;
  clearCart:() => Promise<any>;
  cartID:string
  afterPayment:() => Promise<any>;
}
