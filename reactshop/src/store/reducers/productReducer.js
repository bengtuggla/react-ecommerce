import actiontypes from "../actiontypes";

const initState = null

const productReducer = (state = initState, action) => {
 switch(action.type){
  case actiontypes().product.set:
  state = action.payload
  return state

  case actiontypes().product.clear:
   state = null
   return state

  default:
   return state
 }

}

export default productReducer;