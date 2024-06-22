import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Productview.css'
import Productdata from '../../../component/ProductCards/Productdata/Data';
import ProductCards from '../../../component/ProductCards/ProductCards';
import Navbar from '../../../component/Navbar/Navbar';
import Star from './star.png'
import Back from './back.png'
import Footer from './../../../component/Footer/Footer'

function Productview() {
  const { id } = useParams();
  const selectCard = Productdata.find((cardObj) => cardObj.id === id);

  if (!selectCard) {
    return <div>Product not found</div>;
  }

  const relatedProducts = Productdata.filter((cardObj) => 
    cardObj.Categories === selectCard.Categories && cardObj.id !== id
  );

  return (
    <>
      <Navbar/>
      <Link to='/Product' className='back-btn'><img height={'50px'} src={Back} alt="Back"/></Link>
      <div className='main-view-container'>
        <div className='product-img-container'>
          <img className='product-img' src={selectCard.ProductImg} alt={selectCard.name} />
        </div>
        <div className='Dis-container'>
          <span className='title'>{selectCard.Title}</span>
          <br />
          <br />
          <p>Price: {selectCard.Price}</p>
          <p>Rating: {selectCard.Rating}/5 <img className='star-img' src={Star} alt="Star"/></p>
          <p>Reviews: {selectCard.Reviews}</p>
          <p>Category: {selectCard.Categories}</p>
          <p>Sold By: {selectCard.Brand}</p>
          <p className='discription'>Product Description: {selectCard.Description}</p>
        </div>
      </div>
      <div className='use-discription-container'>
        <div className='Ingrediants-container'>
          <span className='Ingridiant-title'>Ingredients:</span>
          <br/><br/><br/>
          <p>{selectCard.Ingredients.Ingredient1}</p>
        </div>
      </div>
      <div>
        <br/>
      </div>
      <span className='Related-content-heading'>Related Products</span>
      <div className='pcardsContainers2'>
        {
          relatedProducts.map((Carddata) => {
            const {
              id,
              ProductImg,
              Title,
              Price,
              Categories,
            } = Carddata;
            return (
              <ProductCards
                key={id}
                id={id}
                ProductImg={ProductImg}
                Title={Title}
                Price={Price}
                Categories={Categories}
              />
            );
          })
        }
      </div>
      <Footer/>
    </>
  );
}

export default Productview;
