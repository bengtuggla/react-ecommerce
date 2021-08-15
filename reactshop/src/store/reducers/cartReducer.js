import actiontypes from "../actiontypes";
// import productReducer from "./productReducer";

const initState = {
 shoppingCart: [],
 totalCartQuantity: 0,
 totalCartAmount: 0
}

const cartReducer = (state = initState, action) => {
 switch(action.type) {
  case actiontypes().cart.add:
   let itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload._id)

   itemIndex < 0
   ? state.shoppingCart = [...state.shoppingCart, {...action.payload, quantity: 1}]
   : state.shoppingCart[itemIndex].quantity += 1

   state.totalCartAmount = getTotalAmount(state.shoppingCart)
   return state

  default:
   return state
 }
}
const getTotalAmount = cart => {
  let total = 0;
  cart.forEach(product => {
      total += product.price * product.quantity
  })
  return total
}
export default cartReducer;