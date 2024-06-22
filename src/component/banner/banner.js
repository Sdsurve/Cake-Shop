import {Link} from "react-router-dom"
import React from 'react'
import "./banner.css"
import mainbanner from "./../../views/Home/homeImg/banner1.jpg";
import { theme } from "./../../configData";
import logo from './../../views/Home/homeImg/logo2.png'
import Button from "./../../component/ButtonBox/ButtonBox"
const banner = ()=>{
    return(<>
        <div className="  banner-container pt-5">
                <img src={mainbanner} className="background-img "/>
               < div className="description-container  pt-5 ">
               <img className="logos" height={'200px'} src={logo}/>
             <h1  className="p-3 title1 headingFont">Discover Your True Beauty </h1>
              <h5  className="p-2 title2 descriptionFont">Popularized through customer relationships with some of the world’s most recognizable faces, the “brow revolution” she ignited has become a landmark</h5> 
              <Link to="./../Product" >  <Button text="Discover"  />  </Link> 
              </div> 
         </div>
      
    </>
    
    )
    }
    export default banner
   