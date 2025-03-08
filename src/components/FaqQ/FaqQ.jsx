import React from 'react';
import FaqA from '../FaqA/FaqA';
// import data from "src/assets/data.json" with {type:"json"} 



function FaqQ({question, answer}) {
  return (
    <div>
      <div className='ques'>
        <p>{question}</p>
        <img onClick={} src='src/assets/icon-minus.svg' alt='Minus Icon' />
      </div>
      <FaqA answer={answer} />
    </div>
  );
}

export default FaqQ;
