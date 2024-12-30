const cartActionCreator = (cartProducts) => {
    alert("cartAction got called")
    console.log(cartProducts)
    return {
        type : "CART",
        payload : cartProducts
    };
};

export default cartActionCreator