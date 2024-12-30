import React from 'react'
import "./products.css"
import { useEffect } from 'react'
import { getAllProducts } from './service/allProducts'
import { getDataCategoryWise } from './service/allProducts'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import Footer from '../../components/footer/footer'

function Products() {
  const dispatch = useDispatch();

  const productsData = useSelector((store) => {
    return store.productsReducer.data;
  });

  useEffect(() => {
    if (productsData.length === 0) {
      getAllProducts(dispatch);
    }
  }, []);

  return (
    <div>
      {
        productsData.length  >  0  ?

          <div>
            {/* <div>
              <div className="options">
                <div>
                  <input
                    type="radio"
                    name="products"
                    defaultChecked
                    onChange={() => {
                      getAllProducts(dispatch);
                    }}
                  />
                  <label>All</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="products"
                    onChange={() => {
                      getDataCategoryWise(dispatch, "beauty");
                    }}
                  />
                  <label>Beauty</label>
                </div>

                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type="radio"
                    name="products"
                    onChange={() => {
                      getDataCategoryWise(dispatch, "smartphones");
                    }}
                  />
                  <label>Smartphones</label>
                </div>

                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type="radio"
                    name="products"
                    onChange={() => {
                      getDataCategoryWise(dispatch, "groceries");
                    }}
                  />
                  <label>Groceries</label>
                </div>

                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type="radio"
                    name="products"
                    onChange={() => {
                      getDataCategoryWise(dispatch, "kitchen-accessories");
                    }}
                  />
                  <label>Kitchen-Accessories</label>
                </div>

                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type="radio"
                    name="products"
                    onChange={() => {
                      getDataCategoryWise(dispatch, "Home");
                    }}
                  />
                  <label>Home</label>
                </div>
              </div>

              <div className="products">
                {productsData.map((product) => {
                  return (
                    <Product
                      //here instead of sending props, we can send object directly
                      product={product}
                    />
                  );
                })}
              </div>
            </div> */}

            <main>
        <div className="row-base"> 
            <div className="breadcrumbs-base">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-item">
                        <a href="">
                            <span>Home/</span>
                        </a>
                        
                    </li>
                    <li className="breadcrumbs-item">
                        <a href="">
                            <span>Myntra fashion Store</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="row-base">
            <div className="title-container">
                <h1 className="title-title">Myntra Fashion Store</h1>
                <span>
                    -
                    334423
                </span>
            </div>
        </div>

        <div className="row-base">
            <div className="left-container column-base">
                <div className="filters header-container">
                    <span className="header-title">FILTERS</span>
                </div>
                <div className="filters">
                    <ul>
                        <li><input type="radio" name="filter" value="men"/>Men</li>
                        <li><input type="radio" name="filter" value="women"/>Women</li>
                        <li><input type="radio" name="filter" value="boys"/>Boys</li>
                        <li><input type="radio" name="filter" value="girls"/>Girls</li>
                    </ul>
                </div>
                <div className="filters categories">
                    <div className="filters-header">categories</div>
                    <div className="search">
                        
                    </div>
                    <ul>
                        <li><input type="checkbox" name="Tshirts" id=""/>Tshirts</li>
                        <li><input type="checkbox" name="sarees" id=""/>Sarees</li>
                        <li><input type="checkbox" name="shirts" id=""/>Shirts</li>
                        <li><input type="checkbox" name="dresses" id=""/>Dresses</li>
                        <li><input type="checkbox" name="kurta" id=""/>Kurta Set</li>
                        <li><input type="checkbox" name="tops" id=""/>Tops</li>
                        <li><input type="checkbox" name="kurtas" id=""/>Kurtas</li>
                        <li><input type="checkbox" name="Earings" id=""/>Earings</li>
                    </ul>
                    <div className="categories-more">
                        730+ more
                    </div>
                </div>
                <div className="filters brand">
                    <div className="filters-header">Brand</div>
                    <div className="search">

                    </div>
                    <ul>
                        <li><input type="checkbox" name="baesd" id=""/>Based</li>
                        <li><input type="checkbox" name="Kalini" id=""/>kalini</li>
                        <li><input type="checkbox" name="Roadster" id=""/>Roadster</li>
                        <li><input type="checkbox" name="dressBerry" id=""/>DressBerry</li>
                        <li><input type="checkbox" name="Nike" id=""/>Nike</li>
                        <li><input type="checkbox" name="Puma" id=""/>Puma</li>
                        <li><input type="checkbox" name="Adidas" id=""/>Adidas</li>
                        <li><input type="checkbox" name="Fila" id=""/>Fila</li>
                    </ul>
                    <div className="categories-more">
                        9801+ more
                    </div>
                </div>
                <div className="filters price">
                    <div className="filters-header">Price</div>
                    <input type="range" min="1" max="10000" name="" value="1"/>
                </div>
                <div className="filters colour">
                    <div className="filters-header">Colors</div>
                    <div className="search">
                        
                    </div>
                    <ul>
                        <li><input type="checkbox" name="black" id=""/>black</li>
                        <li><input type="checkbox" name="red" id=""/>red</li>
                        <li><input type="checkbox" name="green" id=""/>Green</li>
                        <li><input type="checkbox" name="pink" id=""/>Pink</li>
                        <li><input type="checkbox" name="brown" id=""/>Brown</li>
                        <li><input type="checkbox" name="yellow" id=""/>Puma</li>
                        <li><input type="checkbox" name="blue" id=""/>Adidas</li>
                        <li><input type="checkbox" name="white" id=""/>Fila</li>
                    </ul>
                </div>
                <div className="filters discounts">
                    <div className="filters-header">Discounts</div>
                    <ul>
                        <li><input type="radio" name="filter" value="men" />Men</li>
                        <li><input type="radio" name="filter" value="women" />Women</li>
                        <li><input type="radio" name="filter" value="boys" />Boys</li>
                        <li><input type="radio" name="filter" value="girls" />Girls</li>
                    </ul>

                </div>
            </div>

            
            <div className="rightContainer column-base">
                <div className="right-filters">
                    <ul className="asta-filters">
                        <li>Bundles</li>
                        <li>Country of origin</li>
                        <li>Size</li>
                    </ul>
                    <div className="sort-by">
                        Sort-By
                    </div>                    
                </div>
                
                <div className="products">
                {productsData.map((product) => {
                  return (
                    <Product
                      //here instead of sending props, we can send object directly
                      product={product}
                    />
                  );
                })}
              </div>
            </div>
        </div>
    </main>


            <Footer></Footer>
          </div>

          :

          <div>
            {/* <div className="options">
              <div>
                <input
                  type="radio"
                  name="products"
                  defaultChecked
                  onChange={() => {
                    getAllProducts(dispatch);
                  }}
                />
                <label>All</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="products"
                  onChange={() => {
                    getDataCategoryWise(dispatch, "beauty");
                  }}
                />
                <label>Beauty</label>
              </div>

              <div className='form-check'>
                <input
                  className='form-check-input'
                  type="radio"
                  name="products"
                  onChange={() => {
                    getDataCategoryWise(dispatch, "smartphones");
                  }}
                />
                <label>Smartphones</label>
              </div>

              <div className='form-check'>
                <input
                  className='form-check-input'
                  type="radio"
                  name="products"
                  onChange={() => {
                    getDataCategoryWise(dispatch, "groceries");
                  }}
                />
                <label>Groceries</label>
              </div>

              <div className='form-check'>
                <input
                  className='form-check-input'
                  type="radio"
                  name="products"
                  onChange={() => {
                    getDataCategoryWise(dispatch, "kitchen-accessories");
                  }}
                />
                <label>Kitchen-Accessories</label>
              </div>

              <div className='form-check'>
                <input
                  className='form-check-input'
                  type="radio"
                  name="products"
                  onChange={() => {
                    getDataCategoryWise(dispatch, "Home");
                  }}
                />
                <label>Home</label>
              </div>
            </div> */}
            <div>
              <h2>Something went wrong !!!, please don't give up</h2>
            </div>
          </div>
      }
    </div>
  );
}

export default Products