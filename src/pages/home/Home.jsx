import React from 'react';
import "./home.css";
import Footer from '../../components/footer/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const bannerSlider = [
  'src/pages/home/images/bannerSlider/banner3.png',
  'src/pages/home/images/bannerSlider/banner2.png',
  'src/pages/home/images/bannerSlider/banner1.png',
  'src/pages/home/images/bannerSlider/banner4.png',
  'src/pages/home/images/bannerSlider/banner5.png'
];

var settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  dots: true
};

function Home() {
  return (
    <div>
      <main>
        <Slider {...settings}>
          {
            bannerSlider.map((imgSrc, index) => {
              return (
                <div key={index} className="banner-container">
                  <img className="banner-img" src={imgSrc} alt="banner" />
                </div>
              );
            })
          }
        </Slider>

        <div className="category-heading">categories to cart</div>
        <div className="category-items">
          <img className="category-item" src="src/pages/home/images/categories/1.png" alt="catgry img" />
          <img className="category-item" src="src/pages/home/images/categories/2.png" alt="" />
          <img className="category-item" src="src/pages/home/images/categories/3.png" alt="" />
          <img className="category-item" src="src/pages/home/images/categories/4.png" alt="" />
          <img className="category-item" src="src/pages/home/images/categories/5.png" alt="" />
          <img className="category-item" src="src/pages/home/images/categories/6.png" alt="" />
          <img className="category-item" src="src/pages/home/images/categories/7.png" alt="" />
          <img className="category-item" src="src/pages/home/images/categories/8.png" alt="" />
          <img className="category-item" src="src/pages/home/images/categories/9.png" alt="" />
          <img className="category-item" src="src/pages/home/images/categories/10.png" alt="" />
        </div>

        <div className="sale-heading">sale!!  sale!!  sale!!</div>
        <div className="sale-items">
          <img className="sale-item" src="src/pages/home/images/offers/1.png" alt="" />
          <img className="sale-item" src="src/pages/home/images/offers/2.png" alt="" />
          <img className="sale-item" src="src/pages/home/images/offers/3.png" alt="" />
          <img className="sale-item" src="src/pages/home/images/offers/4.png" alt="" />
          <img className="sale-item" src="src/pages/home/images/offers/5.png" alt="" />
          <img className="sale-item" src="src/pages/home/images/offers/6.png" alt="" />
          <img className="sale-item" src="src/pages/home/images/offers/7.png" alt="" />
          <img className="sale-item" src="src/pages/home/images/offers/8.png" alt="" />
          <img className="sale-item" src="src/pages/home/images/offers/9.png" alt="" />
          <img className="sale-item" src="src/pages/home/images/offers/10.png" alt="" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;




// import React from 'react'
// import "./home.css"
// import Footer from '../../components/footer/footer';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

// const bannerSlider = [
//   'src/pages/home/images/bannerSlider/banner3.png', 'src/pages/home/images/bannerSlider/banner2.png', 'src/pages/home/images/bannerSlider/banner1.png', 'src/pages/home/images/bannerSlider/banner4.png','src/pages/home/images/bannerSlider/banner5.png'
// ]

// var settings = {
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   pauseOnHover: true,
//   dots: true
// }; 

// function Home() {
//   return (
//     <div>
//     <main>
//         {/* <div>
//           <div>
//             <li>
//               <ul>Topwear</ul>
//               <ul></ul>
//               <ul>4</ul>
//               <ul>5</ul>
//               <ul>6</ul>
//               <ul>7</ul> 
//             </li>
//           </div>
//         </div> */}
//      <Slider {...settings}>
//       {
//         bannerSlider.map((imgSrc) => {
//           return (
//             <div className="banner-container">
//               <img className="banner-img" src={imgSrc} alt="banner" />
//             </div>
//           )
//         })
//       }
//       </Slider>

//       <div className="category-heading">categories to cart</div>
//       <div className="category-items">
//         <img className="category-item" src="src/pages/home/images/categories/1.png" alt="catgry img"></img>
//         <img className="category-item" src="src/pages/home/images/categories/2.png" alt="" />
//         <img className="category-item" src="src/pages/home/images/categories/3.png" alt="" />
//         <img className="category-item" src="src/pages/home/images/categories/4.png" alt="" />
//         <img className="category-item" src="src/pages/home/images/categories/5.png" alt="" />
//         <img className="category-item" src="src/pages/home/images/categories/6.png" alt="" />
//         <img className="category-item" src="src/pages/home/images/categories/7.png" alt="" />
//         <img className="category-item" src="src/pages/home/images/categories/8.png" alt="" />
//         <img className="category-item" src="src/pages/home/images/categories/9.png" alt="" />
//         <img className="category-item" src="src/pages/home/images/categories/10.png" alt="" />
//       </div>
//       <div className="sale-heading">sale!!  sale!!  sale!!</div>
//       <div className="sale-items">
//         <img className="sale-item" src="src/pages/home/images/offers/1.png" alt="" />
//         <img className="sale-item" src="src/pages/home/images/offers/2.png" alt="" />
//         <img className="sale-item" src="src/pages/home/images/offers/3.png" alt="" />
//         <img className="sale-item" src="src/pages/home/images/offers/4.png" alt="" />
//         <img className="sale-item" src="src/pages/home/images/offers/5.png" alt="" />
//         <img className="sale-item" src="src/pages/home/images/offers/6.png" alt="" />
//         <img className="sale-item" src="src/pages/home/images/offers/7.png" alt="" />
//         <img className="sale-item" src="src/pages/home/images/offers/8.png" alt="" />
//         <img className="sale-item" src="src/pages/home/images/offers/9.png" alt="" />
//         <img className="sale-item" src="src/pages/home/images/offers/10.png" alt="" />
//       </div>
//     </main>
//     <Footer></Footer>
//     </div>
//   )
// }

// export default Home