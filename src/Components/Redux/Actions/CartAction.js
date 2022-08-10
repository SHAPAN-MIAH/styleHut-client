
export const addToCart = (payload) => {
  return {
    type: 'Add_To_Cart',
    payload,
  }
}
export const removeFromCart = (payload) => {
  return {
    type: 'Remove_From_Cart',
    payload,
  }
}
export const ClearCart = () => {
  return {
    type: 'Clear_Cart'
  }
}