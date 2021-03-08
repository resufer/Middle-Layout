import React from 'react';

let Navigation = ({ heightState }) => {
  return (<>{
    heightState ?
      <nav><div>
        <span>∞ MENU</span>
      </div></nav> :
      <nav>
        <a href='/#'>HOME</a>
        <a href='/#'>ABOUT ME</a>
        <a href='/#'>PORTFOLIO</a>
        <a href='/#'>CONTACT</a>
      </nav>
  }</>)
};

export default Navigation;
