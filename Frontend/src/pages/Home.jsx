import React from 'react'
import Featured from '../Components/featured/Featured'
import FeaturedProperties from '../Components/featuredProperties/FeaturedProperties';
import Header from '../Components/Header/Header'
import MailList from '../Components/mailList/MailList';
import Navbar from '../Components/Navbar/Navbar'
import  PropertyList  from '../Components/propertyList/PropertyList';
import Footer from '../Components/footer/Footer'
import "./home.css"


const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Header/>
        <div className="featuredContainer">
          <Featured/>
          <h1 className="homeTitle">
            Browse by property type
          </h1>
          <PropertyList />

          <h1 className="homeTitle">
           Homes guests love
          </h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
        
    </div>
  )
}

export default Home