import React from 'react';
import FaqA from '../FaqA/FaqA';
// import data from "src/assets/data.json" with {type:"json"} 



function FaqQ({question, answer}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div className='ques'>
        <p>{question}</p>
       {
        open ?  <img
          onClick={() => setOpen(false)}
          src='src/assets/icon-minus.svg'
          alt='Minus Icon'
        />
        :
         <img
          onClick={() => setOpen(true)}
          src='src/assets/icon-plus.svg'
          alt='Minus Icon'
        />
        
       }
      </div>
      {open && <FaqA answer={answer} />}
    </div>
  );
}

export default FaqQ;
