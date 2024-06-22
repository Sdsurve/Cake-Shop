import "./categoryCard.css"
import { Link } from 'react-router-dom'
import { theme } from "./../../configData";
const categoryCard = ({catImg , catName})=>{
    return(<>
    <Link to="./../Product" className="category-container container-fluid position-relative col-xs-12 col-lg-4 col-md-6 mt-4 p-3">
        <div className="  ">
            <div className="img-contain">
            <img height={'400px'} width={'1000px'} src={catImg} className="cat-img img-fluid "/> 
             
             <p className="  fs-4 fw-bolder cat-name subHeadingFont "
              style={{color : theme.Heading}}>
                {catName}
                </p> 
               
            </div>
               
        </div>
        </Link> 
      
    </>
    
    )
    }
    export default categoryCard;