import axios from "axios"
import productActionCreator from "../actions/productActionCreator"

export const getAllProducts = (dispatch)=>{
    axios.get('https://dummyjson.com/products?limit=0')
    .then((res)=>{
      console.log(res)
      alert("getAllProducts() got called")
      dispatch(productActionCreator(res.data.products))
    })
    .catch((error)=>{
      console.log(error)
    })
}
 
export const getDataCategoryWise = (dispatch,category)=>{
   
  
  axios.get(`https://dummyjson.com/products/category/${category}`)
  .then((res)=>{
    alert("getCatagory got called")
    dispatch(productActionCreator(res.data.products))
  })
  .catch((error)=>{
    console.log(error)
  })
}

export const searchProducts=(dispatch,searchQuery)=>{
  axios.get(`https://dummyjson.com/products/search?q=${searchQuery}&limit=0`)
  .then((res)=>{
    console.log(res.data.products)
    alert("searchProducts got called")
    dispatch(productActionCreator(res.data.products))
  })
  .catch((error)=>{
    console.log(error)
  })
  }
