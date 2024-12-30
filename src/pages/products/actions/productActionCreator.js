 const productActionCreator = (data)=>{
    alert("prodAction got called")
        return {
            type:"PRODUCTS",
            payload:data,
        }
}

export default productActionCreator