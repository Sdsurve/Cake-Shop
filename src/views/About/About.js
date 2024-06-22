import "./About.css"
import bg1 from "./img/about.jpeg"
import cake from "./img/cakebout.jpeg"
import fruit from "./img/fruit.png"
import floral from "./img/floral.png"
import ocean from "./img/ocean.png"
import { theme } from "../../configData"
import { cosmetic_sold,happy_client,countries,employee } from "./AboutData"
import TeamCard from "../../component/TeamCard/TeamCard"
import ButtonBox from "./../../component/ButtonBox/ButtonBox"
import { Link } from "react-router-dom"
import { Toaster,toast } from "react-hot-toast"
import Navbar from "./../../component/Navbar/Navbar"
import Footer from "./../../component/Footer/Footer"



function About() {
  return (
    <>
    <Navbar/>
        <div>
            <div className="section1">
                <div>
                    <img src={bg1} className="title-bg" alt="background" />
                </div>
            </div>
            <div className="cosmetic-types-data">
                <div className="cake-types-data-1">
                    <img src={cake} alt="nailpaint" className="cake-types-data-1-img"/>
                </div>
                <div className="cosmetic-types-data-2">
                    <div className="cosmetic-types-data-2-text">
                        <h1 style={{color: theme.Heading}} className="headingFont"> Who We Are</h1>
                        <p style={{color: theme.description}} className="descriptionFont">Founded in 2016 in Gurugram, Bakingo has expanded to encompass 75 kitchens across 15+ cities, serving 200+ unique cakes and desserts, which is a testament to our commitment to quality, innovation, and customer delight. Our journey of becoming India's National Bakery Brand is marked by a relentless pursuit of baking excellence, underpinned by impeccable processes and advanced technology. With every bite, Bakingo promises a treat, an experience of joy, nostalgia, and the blissful essence of life's sweetest moments. </p>
                    </div>
                    <br/>
                    <div className="cosmetic-types-data-2-text">
                        <h1 style={{color: theme.Heading}} className="headingFont"> Our Ethos</h1>
                        <p style={{color: theme.description}} className="descriptionFont">At Bakingo, everything revolves around three core values: Quality, Innovation, and Customer Satisfaction. Driven by a deep-seated passion for perfection and an unyielding dedication to growth, we are charting a new course in culinary brilliance. Our commitment to sustainability, from local sourcing to minimising waste, guides us as we make pivotal strides with our state-of-the-art kitchen. </p>
                    </div>
                    <div className="types-images">
                        <div>
                            <img src={fruit} className="type-img" alt="fresh type"/>
                            <p className="img-text" style={{color: theme.Heading}} >Fresh Types</p>
                        </div>
                        <div>
                            <img src={floral} className="type-img" alt="floral type"/>
                            <p className="img-text" style={{color: theme.Heading}}  >Floral Types</p>
                        </div>
                        <div>
                            <img src={ocean} className="type-img" alt="ocean type"/>
                            <p className="img-text" style={{color: theme.Heading}} >Oceanic Types</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="section3-sub">
                    <h1 style={{color: theme.Heading}} className="headingFont">Our Achievements</h1>
                    <p style={{color: theme.description}} className="section3-description descriptionFont">Every day, our dedicated chefs lovingly bake more than 15,000 cakes and desserts. We aim for nothing less than perfection in every treat we make, combining fresh and top-quality ingredients.  We see our delectable desserts as conversation starters and cherished memory makers. </p>
                </div>
                <div className="section3-sub2">
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{cosmetic_sold}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">Cake Deliverd</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{happy_client}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">Smiles Assured</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{countries}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">Countres</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{employee}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">Skilled Chefs On Board</p>
                    </div>
                </div>
            </div>
            <div className="section4">
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/nIjoVNkDnRA?si=JQHlpC95x3aRrI6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="section5">
                <h1 style={{color: theme.Heading}} className="headingFont ">Our Team</h1>
                <div className="section5-1">
                    <div style={{color: theme.description}}  className="descriptionFont team-description">
                    Our team is the heart and soul of our company, bringing together a diverse group of dedicated professionals who are passionate about natural organic cosmetics. Each member of our team plays a vital role in our mission to create high-quality, sustainable products that enhance beauty and well-being.
                    </div>
                    <div className="btn-div">
                    <Toaster />
                    <Link to="/about" onClick={() => toast('Welcome to About Page')} >
                        <ButtonBox
                            text="View More"
                        />
                    </Link>
                    </div>
                </div>
                <div className="team-img-div">
                        <TeamCard 
                            TeamName="Duff Goldman" 
                            TeamImage='https://i.pravatar.cc/150?img=14' 
                            TeamPosition="CEO"
                        />
                        <TeamCard 
                            TeamName="Lorraine Pascale" 
                            TeamImage='https://i.pravatar.cc/150?img=43'
                            TeamPosition="Outstanding Pastry Chef"
                        />
                        <TeamCard 
                            TeamName="Elizabeth Falkner" 
                            TeamImage='https://i.pravatar.cc/150?img=5'
                            TeamPosition="Designer"
                        />
                    </div>
                    <div className="team-img-div">
                        <TeamCard 
                            TeamName="William Yosses" 
                            TeamImage='https://i.pravatar.cc/150?img=12'
                            TeamPosition="Baker"
                        />
                        <TeamCard 
                            TeamName="Gale Gand" 
                            TeamImage='https://i.pravatar.cc/150?img=45'
                            TeamPosition="Food Manager"
                        />
                        <TeamCard 
                            TeamName="Roland Mesnier" 
                            TeamImage='https://i.pravatar.cc/150?img=8'
                            TeamPosition="Office Head"
                        />
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default About