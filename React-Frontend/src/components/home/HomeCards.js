import React from 'react';
import './HomeCards.css';
import CardItem from './HomeCardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these cool phones!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn.mos.cms.futurecdn.net/unjUSvUGkFgqy8koyswpEH-1024-80.jpg.webp'
              text='Experience the Apple IPhone 13 Pro Max'
              label='Popular Option'
              path='/catalog'
            />
            <CardItem
              src="https://cdn.mos.cms.futurecdn.net/eQoitRsH3xroGKDEf2quRo-1200-80.jpg.webp"
              text='With Samsung Pen, Everything is possible'
              label='Business'
              path='/catalog'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn.mos.cms.futurecdn.net/FfkqxL5M786ja2sEsPz4YM-1200-80.jpg.webp'
              text='Try out the new Iphone 14 Pro'
              label='New Phone'
              path='/catalog'
            />
            <CardItem
              src='https://cdn.mos.cms.futurecdn.net/EgKmM7UV7GyL2nPEnHQ7Pc-1200-80.jpg.webp'
              text='Google Pixel is what you need'
              label='Adventure'
              path='/catalog'
            />
            <CardItem
              src='https://www.lg.com/us/images/cell-phones/md07000070/gallery/medium05.jpg'
              text='LG V50 ThinQ 5G is now on sale'
              label='Innovation'
              path='/catalog'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
