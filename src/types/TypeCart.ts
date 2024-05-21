type typeCart = {
  image: string,
  name: string,
  quantity: number,
  total_price: number,
  size: string
  product : any
}

interface ICart {
  cart: typeCart[],
}