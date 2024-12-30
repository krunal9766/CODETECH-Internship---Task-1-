import cartActionCreator from "../../actions/cartActionCreator"

var addToCartService = (product,dispatch) => {
    alert("addToCartService got called")
    console.log(product)
    dispatch(cartActionCreator(product))
}

export default addToCartService