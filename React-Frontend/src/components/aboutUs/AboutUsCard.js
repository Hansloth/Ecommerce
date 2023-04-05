import React from 'react';
import { Link } from 'react-router-dom';

function AboutUsCardItem(props) {
  return (
    <>
      <li className='cards__item'>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Profile Pic'
              src={props.src}
            />
          </figure>
          <div>
            <h5>{props.text}</h5>
          </div>
      </li>
    </>
  );
}

export default AboutUsCardItem;
