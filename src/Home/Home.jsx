import React, { useState } from 'react';
import { changeText } from './changeText';

let Home = ({ heightState }) => {
  let [text, setText] = useState('scroll down to see more');

  setInterval(() => {
    let newText = changeText();
    setText(newText);
  }, 1000)

  return (
    <div className='home'>
      {!heightState && <div className='scroll'>
        <div className='scroll__description'>
          {text}
        </div>
        <div className='scroll__img'></div>
      </div>
      }
    </div>
  )
};

export default Home;
