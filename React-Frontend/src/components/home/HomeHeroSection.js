import React from 'react';
import { Button } from './HomeButton';
import './HomeHeroSection.css';
import YoutubeEmbed from "./YoutubeEmbed";
import homeBackground from './home_background.png'

function HeroSection() {
  return (
      <div className='hero-container'> 
          {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
          <h1>Get Connected</h1>
          <p>Future is in your hand!</p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              <h1 style={{color: 'white'}}>GO SHOP</h1>
            </Button>
          </div>
          <h3>
            Get Connected strives to be Earth’s most customer-centric company. With quality and speed always top priority, our customers can rely on us. 
          </h3>
          <h4>
              E-shop values out customer. Our motto is 'Customer is more important than our lives'. Whichever product you get from us have a 180 day return policy. 
              Feel free to contact us when you have problem with your purchase. We are willing to make your experience with shopping with us great. 
          </h4>

        </div>

        
  );
}

export default HeroSection;
