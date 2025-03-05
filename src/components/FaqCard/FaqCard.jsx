import React from 'react';
import Heading from '../Heading/Heading';
import data from "../../assets/data.json" with {type:"json"} 
import FaqQ from '../FaqQ/FaqQ';


function FaqCard() {
  return <div className='faqCard'>
    <Heading/>
    
    {
      data.map ((qa) => (
        <FaqQ key = {qa.question} question={qa.question} answer={qa.answer} />
      
      ))
    }
  
        </div>
    }
export default FaqCard;
