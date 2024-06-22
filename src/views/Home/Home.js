import React from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom"
import { Toaster, toast } from "react-hot-toast"
import Cat1 from "./homeImg/chocolate-cream-cake-half-kg_1.webp"
import Cat2 from "./homeImg/MangoCakes_web copy.webp"
import Cat3 from "./homeImg/Black-Forest-Cakes_web.webp"
import Banner from "./../../component/banner/banner"
import CategoryCard from '../../component/categerioes/categoryCard';
import { theme } from "./../../configData";
import Button from '../../component/ButtonBox/ButtonBox';
import TestimonialCards from "./../../component/Testimonial/testimonial"
import Navbar from "./../../component/Navbar/Navbar"
import Footer from '../../component/Footer/Footer'
import ProductFeature from '../../component/ProductFeatures/productFeature'
import ProductCards from "./../../component/ProductCards/ProductCards"
import Productdata from "./../../component/ProductCards/Productdata/Data"

// import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  useEffect(() => {
    toast.success("Page loaded successfully!! 🎯😜");
  }, []);
  return (
    <>
      <Toaster />
      <Navbar />
      <Banner />
      <div className=' row mx-3 '>
        <CategoryCard catImg={Cat1}
          catName={<Button text="Chokalate" />} />
        <CategoryCard catImg={Cat2}
          catName={<Button text="Mango" />} />
        <CategoryCard catImg={Cat3}
          catName={<Button text="BlackForest" />} />
      </div><br/><br/>
      <div className='text-center mt-2'>
        <span className='fs-1 headingFont' style={{ color: theme.primaryColor }}>BEST SELLERS PRODUCTS</span> <br />
        <span className='fs-3 subHeadingFont' style={{ color: theme.description, fontStyle: "italic" }} >The stylish and organized cakes</span>
      </div><br/><br/>
      <div className='pcardsContainers3 row mt-4'>
        {
          Productdata.map((item, i) => {
            const { id, ProductImg, Title, Price, Categories } = item;
            return (
              <div className='col-lg-3 col-md-6 col-xs-12'>
                <ProductCards
                  key={i}
                  id={id}
                  ProductImg={ProductImg}
                  Title={Title}
                  Price={Price}
                  Categories={Categories}
                />
              </div>
            )
          })
        }
      </div>

      <br/><br/><Link to="./../Product"><center className='explore-btn'><Button text="Explore More" /></center></Link>
      <br/><br/><br/>
      <ProductFeature />
      <br/>
      <br/>
      <TestimonialCards />
      <br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  )
}

export default Home

//
