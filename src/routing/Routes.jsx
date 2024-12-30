import Home from '../pages/home/Home'
import PageNotFound from '../pages/pageNotFound/PageNotFound'
import Products from '../pages/products/Products'
import Signin from '../pages/signin/Signin'
import Signup from '../pages/signup/Signup'
import AboutUs from '../pages/about us/AboutUs'
import Contact from '../pages/contact/Contact'
import ProductDetails from '../pages/products/ProductDetails'
import Cart from '../pages/cart/Cart'


export var routes=[
    {path : "/", component : <Home/>},
    {path : "/", component : <Signin/>},
    {path : "/products", component : <Products/>},
    {path : "/aboutus", component : <AboutUs></AboutUs>},
    {path : "/contact", component : <Contact></Contact>},
    {path : "/cart" , component : <Cart />},
    {path : "/productDetails/:id", component : <ProductDetails />},
    {path : "/*", component : <PageNotFound/>},
]

