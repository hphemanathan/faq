import React from 'react';
// import data from "src/assets/data.json" with {type:"json"} 



function FaqQ({question, answer}) {
  return (
    <div>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
}

export default FaqQ;
