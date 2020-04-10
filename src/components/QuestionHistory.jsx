import React from 'react';
import IndividualQuestion from './IndividualQuestion';
import { Collapsible , CollapsibleItem } from 'react-materialize';



const QuestionHistory = props => {
  const { answers } = props;
  
  return (
    
    <Collapsible accordion>
      {answers.length > 0 ? (
        
        answers.map((answer,index) => (
            <CollapsibleItem 
                key={index}
                expanded={false}
                header=""
                
                node="div"
            >
                <IndividualQuestion answer={answer}/>
            </CollapsibleItem>
        ))
      ) : (
         
         <p></p>
         
      )}
    </Collapsible>
   
  );
};

export default QuestionHistory;