const removefromCart= (id,dispatch)=>{
    dispatch({
        type : "REMOVE-CART",
        payload : id
      });
}

export default removefromCart