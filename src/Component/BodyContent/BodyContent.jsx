import React from 'react';
import './BodyContent.css';

function BodyContent(props) {
  return (
    <>
      <div className='bodycontent'>
        <h1 className='main-title'>UNIVERSITY SPORTS MANAGEMENT SYSTEM</h1>
        {props.children}
      </div>
    </>
  );
}

export default BodyContent;