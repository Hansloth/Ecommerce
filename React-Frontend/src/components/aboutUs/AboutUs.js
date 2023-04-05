import React from "react";
import "./AboutUs.css";
import "../home/HomeCards.css"
import AboutUsCardItem from './AboutUsCard'
import stephenPic from '../../resources/profilePic_stephen.png'
import bennyPic from '../../resources/profilePic_benny.png'
import samiulPic from '../../resources/profilePic_samiul.png'
import hansPic from '../../resources/profilePic_hans.png'

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Hello valuble customer, we are E-Shop</p>
      <br />
      <p>
        E-Shop is a phone shop that's opened since 1985. Back in the day where cell phones are not popular. E-shop sells telephone. Our biggest goal is to connect customer and their love ones.
        We know how important it is to be connected with your family, friends and love ones. This is why we sell the best quality phones. And provide multiple choices at a friendly price.
      </p>

      <div>
        <div className='item'>
          <img className='aboutUs_img' src={hansPic}/>
          <span class="title_caption">CEO</span>
          <span class="name_caption">Hans Heng Yu</span>
        </div>
        <div className='item'>
          <img className='aboutUs_img' src={bennyPic}/>
          <span class="title_caption">CDO</span>
          <span class="name_caption">Benny Naftali</span>
        </div>
        <div className='item'>
          <img className='aboutUs_img' src={samiulPic}/>
          <span class="title_caption">CTO</span>
          <span class="name_caption">Samiul Islam</span>
        </div>
        <div className='item'>
          <img className='aboutUs_img' src={stephenPic}/>
          <span class="title_caption">CISO</span>
          <span class="name_caption">Stephen Southard</span>
        </div>
      </div>

      <h3>Thank you for shopping with us.</h3>
      <br />
   
    </div>
  );
}

export default About;