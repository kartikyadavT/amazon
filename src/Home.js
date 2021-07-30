import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""/>
            <div className="home__row">
            <Product title='Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)' price=
            {30.26} image="https://www.abaco.com/sites/default/files/blog/dot.jpg"
            rating={5}
            />
            <Product 
            id="23445930"
            title="HiFiMAN Arya Full-Size Over Ear Planar Magnetic Audiophile Adjustable Headphone"
            price={1479.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71pzn8nu8bL._SL1500_.jpg"
            /> 
            </div>
            <div className="home__row">
             <Product 
             id="4903850"
             title="New Apple iPhone 12 Pro Max (128GB) - Silver"
             price={1559.38}
             rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/71umuN8XVeL._SL1500_.jpg"
             />
             <Product 
             id="3254354345"
             title="Samsung Galaxy Fold (Black, 12GB RAM, 512GB Storage)"
             price={1601.07}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/71LhAERRPaL._SL1500_.jpg"/>
             <Product 
             id="5632871265"
             title="BSN Syntha-6 Edge, Chocolate Shake, 48 Servings"
             price={627.94}
             rating={3}
             image="https://images-na.ssl-images-amazon.com/images/I/81nl7RvRQkL._SL1500_.jpg"
             />
            </div>
            <div className="home__row">
             <Product 
             id="12953648"
             title="LXT LITE Narrow Ankle Carbon Boot (Black)"
             price={726.54}
             rating={2}
             image="https://images-na.ssl-images-amazon.com/images/I/61npzbvZORL._UL1332_.jpg"
             />
            </div>

            </div>
        </div>
    )
}

export default Home;
