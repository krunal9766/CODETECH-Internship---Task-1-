
const initialData={
    data:[],
    cart:[]
};

const productsReducer=(state=initialData,action)=>{
    alert("prod reducer got called")
    if(action.type === "PRODUCTS"){
        state={
            ...state,
            data:action.payload,
        }
    }

    else if(action.type === "CART"){
        alert("cart reducer got called")
        cart : 
        state={
            ...state,
            // cart:state.cart.push(action.payload),         this is not the right way of storing data
            cart : [...state.cart,action.payload]
        }
    }

    else if(action.type === "REMOVE-CART"){
        alert("remove cart reducer got called")
        state={
            ...state,
            cart: state.cart.filter((product) => product.id != action.payload)
        }
    }

    return state
}

export default productsReducer
