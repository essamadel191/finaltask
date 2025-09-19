export interface AddToCartResponse {
  status: string
  message: string
  cart: {
    _id: string
    totalPrice: number
    products: Array<{
      productId: string
      count: number
      price: number
    }>
  }
}
