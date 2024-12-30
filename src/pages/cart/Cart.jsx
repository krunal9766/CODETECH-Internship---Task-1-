import React from 'react'
import "./cart.css"
import { useSelector,useDispatch } from 'react-redux'
import removefromCart from '../products/service/cart/removeCartService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faFolderClosed, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { faClosedCaptioning } from '@fortawesome/free-regular-svg-icons'
// import img from '../image.png'

function Cart() {
  const dispatch=useDispatch()

  const cartData = useSelector((store)=> {
        alert("got products from the cart")
        console.log(store.productsReducer.cart)
        return store.productsReducer.cart;
  })

  const removeFromCart=(id)=>{
    removefromCart(id,dispatch)
  }

  return (
    <div>
        <h1>cart page</h1>
        <div className='cart-layout'>
            <div class="bag-container">
            {
            cartData.map((cartProduct)=>{
              return(
                    <div className="bag-items-container"> 
                        <div className="bag-item-left">
                            <div className="bag-img-container">
                              {/* <img className="bag-img" src={cartProduct.images} alt=""></img> */}
                              <img src={cartProduct.images}  width={100}></img>
                            </div>
                        </div>
                        <div className="bag-item-right">
                            <div className="bag-brand">{cartProduct.brand}</div>
                            <div className="bag-info">{cartProduct.title}</div>
                            <div className="seller-data">Sold by: KANPUR FLOWERCYCLING PRIVATE LIMITED</div>
                            <div className="bag-price"><span><i className="fa-solid fa-indian-rupee-sign rupees"></i></span>
                                <span> {cartProduct.price}</span></div>
                            <div className="returnItem"></div>
                        </div>
                        <div className="remove-bag-item">
                           <button className="remove-btn" onClick={() => removeFromCart(cartProduct.id)}><FontAwesomeIcon icon={faClose} className='close-icon'></FontAwesomeIcon></button>
                        </div>
                    </div> 
              )
            })
          }
            </div>

      <div className="bag-summery">
                <div className="bag-bill">
                    <div className="price-header">PRICE DETAILS (1 item)</div>
                    <div className="order-summery">
                        <div className="price-details">
                            <span>
                                Total MRP
                            </span>
                            <span>
                                $40
                            </span>
                        </div>
                        <div className="price-details">
                            <span>
                                Coupan Discount
                            </span>
                            <span>
                                <a href="#">Apply Coupon</a>
                            </span>
                        </div>
                        <div className="price-details">
                            <span>
                                Platform Fee &nbsp;
                                <a href="#">know more</a>
                            </span>
                            <span>
                                FREE
                            </span>
                        </div>
                        <div className="price-details">
                            <span>
                                Shiping Fee &nbsp;
                                <a href="#">know more</a>
                            </span>
                            <span>FREE</span>
                        </div>
                        <hr />
                        <div className="price-details-total">
                            <span>
                                Total Amount
                            </span>
                            <span>$70</span>
                        </div>
                    </div>
                    <div>
                        <button className="place-order-button">PLACE ORDER</button>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Cart




 {/* <div className='cartProduct'>
            <img src={cartProduct.image} heigh={150} width={100}></img>
            <h4> {cartProduct.name} </h4>
            <div className='indecbtns'>
              <button className='btn btn-danger btn-md px-3 mx-3'>-</button>
              <span>0</span>
              <button className='btn btn-success btn-md px-3 mx-3'>+
              </button>
            </div>
            <div ><button className='btn btn-danger btn-md' onClick={() => {removeFromCart(cartProduct._id)}}>Remove</button></div>
          </div> */}

          
          // {
          //   cartData.map((cartProduct)=>{
          //     return(
          //           <div className="items-container"> 
          //               <div className="bag-item-left">
          //                   <div className="bag-img-container">
          //                     {/* <img className="bag-img" src={cartProduct.images} alt=""></img> */}
          //                     <img src={cartProduct.images}  width={100}></img>
          //                   </div>
          //               </div>
                        
          //               <div className="bag-item-right">
          //                   <div className="bag-brand">{cartProduct.brand}</div>
          //                   <div className="bag-info">{cartProduct.title}</div>
          //                   <div className="seller-data">Sold by: KANPUR FLOWERCYCLING PRIVATE LIMITED</div>
          //                   <div className="bag-price"><span><i className="fa-solid fa-indian-rupee-sign rupees"></i></span>
          //                       <span> {cartProduct.price}</span></div>
          //                   <div className="returnItem"></div>
          //               </div>
          //               <div className="closeIcon">
          //                  <button onClick={() => removeFromCart(id)}><i className="fa-solid fa-xmark"></i></button>
          //               </div>
          //           </div> 
          //     )
          //   })
          // }

          