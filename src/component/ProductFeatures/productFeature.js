import React from 'react';
import './productFeature.css'; 
import { theme } from '../../configData';
import FeatureImg from "./../../views/Home/homeImg/cake-item1 (1).jpg"
import Button from '../ButtonBox/ButtonBox';

const ProductFeature = () => {
  return (
    <div className="feature-container">
      <div className="feature-image">
        <img src={FeatureImg} alt="Product" />
      </div>
      <div className="feature-text">
        <h2 className="feature-title headingFont  fs-1" style={{color:theme.primaryColor}}>Features</h2>
        <h1 className="feature-heading subHeadingFont" style={{color:theme.description,fontStyle: "italic"}}>Only High Quality Products</h1>
        <p className="feature-description descriptionFont">
        Variety of Cakes: Offers different types of cakes like chocolate, vanilla, fruit, and more.
        <br/>
        Customization: Lets you design your own cake with personalized messages or decorations.
        <br/>
Fresh Ingredients: Uses high-quality, fresh ingredients for all cakes.
<br/>
Online Ordering: Allows you to order cakes online for convenience.
<br/>
Delivery Service: Delivers cakes to your home or event location.
        </p>
      
       
      </div>
    </div>
  );
};

export default ProductFeature;
