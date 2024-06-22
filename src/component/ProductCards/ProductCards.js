import './ProductCards.css';
import { Link } from 'react-router-dom';
import { Toaster, toast } from "react-hot-toast";
import ButtonBox from "./../../component/ButtonBox/ButtonBox";

function ProductCards({ id, ProductImg, Title, Price, Categories }) {
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'chockalte':
        return '#FFC0CB'; // Pink
        case 'Mango':
        return '#ff8080'; // Green
        case 'Black Foreste':
        return '#FFD700'; // Gold
      default:
        return '#607D8B'; // Default Grey
    }
  };

  return (
    <>
      <Toaster />
      <Link
        className="ProductCard"
        onClick={() => toast.success('Page is loaded successfully')}
        to={`/Product/Productview/${id}`}
      >
        <div className="image">
          <img className="Productimg img-fluid" src={ProductImg} alt={Title} />
        </div>
        <br />
        <div className="info">
          <h3 className='cards-title fs-6'>
            {Title.length > 51 ? `${Title.substring(0, 51)}...` : Title}
          </h3>
          <p>Price: {Price}</p>
          <span className="btn-box"><ButtonBox  text="Buy Now" /></span><br />
          <button
            className='tags'
            style={{ backgroundColor: getCategoryColor(Categories) }}
          >
            {Categories}
          </button>
        </div>
      </Link>
    </>
  );
}

export default ProductCards;
