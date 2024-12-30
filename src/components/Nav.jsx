import { useDispatch } from 'react-redux'
import './nav.css'
import logoutActionCreator from './actionCreator/logoutActionCreator';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { searchProducts } from '../pages/products/service/allProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHomeUser, faPerson, faSearch, faShoppingBag, faUserAltSlash, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser, faUserCircle } from '@fortawesome/free-regular-svg-icons';

function Nav() {
  const dispatch = useDispatch();
  const [searchQuery,setSearchQuery]=useState('')

  const logout = () => {
    dispatch(logoutActionCreator())
  }

  const searchHere=(e)=>{
    setSearchQuery(e.target.value)
  }

  // var searchProductss=[];
  // const searchProducts=()=>{
  //   axios.get(`https://dummyjson.com/products/search?q=${searchQuery}&limit=0`)
  //   .then((res)=>{
  //     console.log(res.data.products)
  //     searchProductss=res.data.products
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  //   }


  return (
    <header className='header '>
      <div className="logo-container">
        <Link href="#"><img className="myntra-home" src='src\images\logo.png' alt="myntra-logo"></img></Link>
      </div>
      
      <div className="nav-bar">
        <Link to='/'>men</Link>
        <Link to='/products'>Products</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
        <Link to="#" id="studio">Studio</Link>
      </div>

      <div className="search-bar">
        <button className='search-btn' onClick={()=> {searchProducts(dispatch,searchQuery)}} >
        <FontAwesomeIcon icon={faSearch} className='search-icon' />
        </button>  
        <input className="search-input" type="text" placeholder="Search for Products,Brands and more.." 
                onChange={searchHere}></input>
      </div>

      <div className="action-bar">
      <Link>
        <div className="action-container">
        <FontAwesomeIcon icon={faUser} className='action-icon'></FontAwesomeIcon>
          <span className="action-name">Profile</span>
        </div>
        </Link>
        <Link>
        <div className="action-container">
          <FontAwesomeIcon icon={faHeart} className='action-icon'></FontAwesomeIcon>
          <span className="action-name">favorites</span>
        </div>
        </Link>
        <Link to="/cart">
        <div className="action-container">
        <FontAwesomeIcon icon={faShoppingBag} className='action-icon'></FontAwesomeIcon>
          <span className="action-name">Cart</span>
        </div>
        </Link>
      </div>
    </header>


    // <div className="logo-container">     
    //     <div className="title">
    //     <marquee  direction="right"><h1>Ecommerce App</h1></marquee>
    //     </div>
    //     <div className="links">
    //         <Link to='/'>Home</Link>  
    //         <Link to='/products'>Products</Link>
    //         <Link to="/aboutus">About Us</Link>
    //         <Link to="/contact">Contact</Link>
    //         <Link to="/profile">Profile</Link>
    //         <Link to="/cart">Cart</Link>
    //         <button onClick={logout}>Log Out</button>
    //     </div>
    // </div>
  )
}

export default Nav