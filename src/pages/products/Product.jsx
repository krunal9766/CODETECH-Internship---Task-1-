
import React from 'react'
import { useNavigate } from 'react-router-dom'
import addToCartService from './service/cart/cartService'
import { useDispatch, useSelector } from 'react-redux';
import removefromCart from './service/cart/removeCartService';

function Product({ product}) {
  const dispatch = useDispatch()
  const navigate=useNavigate();
  const {id,brand,images,title,price,description,rating,reviews,category}  = product

  const cartData = useSelector((store)=>{
        return store.productsReducer.cart;
    });
  
  const navigateToProductDetails = (id) => {
    alert("navigating to proDetails")
    navigate(`/productDetails/${id}`)
    }
  
  const addToCart = () => { 
    addToCartService(product,dispatch)
    }

  const removeFromCart = (id) =>
    {
          removefromCart(id,dispatch)
    }

      return (
        <div className="item-container">
            {/* <h3>{title}</h3>
            <h3>{category}</h3> */}
            <img className="item-img" src={images} alt="img"></img>
            <div className="rating">
                {Math.floor(rating)}* | {reviews.length}
            </div>
            <div className="company-name">{brand}</div>
            <div className="item-name">{description.slice(0,50)} ...</div>
            <div className="item-price">
                <span className="current-price">{price}</span>
                {/* <span class="original-price">Rs 1999</span>
                <span class="discount">(42% off)</span> */}
            </div>
            { cartData.length === 0 ? <button className="btn-add-to-cart" onClick={addToCart}>Add to Bag</button>
                                   :  (cartData.filter((cartProduct)=> cartProduct.id === id)).length > 0 ? 
                                       <button className='btn-remove-from-cart' onClick={() => {removeFromCart(id)} } >Remove from Cart</button>
                                       : <button className='btn-add-to-cart' onClick={addToCart} >Add to Bag</button>
           }
        </div>

    // <div className="card" key={_id}>
    //   <div className="card-header">
    //     <img className="card-img" src={image} width={170} height={230} />
    //   </div>
    //   <div className="card-body">
    //     <h5 className="h5">{name.slice(0,25)} ...</h5>
    //     <h5 className="h5">{category} ...</h5>
    //     <h5 className="h5">{_id} </h5>
    //     <p>${price}</p>
    //     <p>{description.slice(0,50)} ...</p>
    //   </div>
    //   <div className="card-footer">
    //   <button className='btn btn-outline-primary ' onClick={() => {navigateToProductDetails(id)}} >Product Details</button>
    //   { cartData.length === 0 ? <button className='btn btn-outline-success' onClick={addToCart} >Add to Cart</button>
    //                           :  (cartData.filter((cartProduct)=> cartProduct._id === _id)).length > 0 ? 
    //                               <button className='btn btn-outline-danger' onClick={() => {removeFromCart(_id)}} >Remove from Cart</button>
    //                               : <button className='btn btn-outline-success' onClick={addToCart} >Add to Cart</button>
    //   }
    //   </div>
    // </div>
  )
}

export default Product