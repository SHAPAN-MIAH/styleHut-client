
const CartReducer = (state = [], action) => {

  switch(action.type){
    case 'Add_To_Cart': {
      return [...state, action.payload]
    }
    case 'Remove_From_Cart': {
      const newState = state.filter(item => item._id !== action.payload)
      return newState;
    }
    case 'Clear_Cart': {
      return [];
    }
    
    default : return state
  }
}

export default CartReducer;