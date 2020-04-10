import React, { Component } from "react";


class IndividualQuestion extends Component {


   

    

    render(){
            const answer = this.props.answer;
            
        console.log("answer", answer)

       if(!!answer.magic.answer) {
        return (
          <div className='usercard'> 
           
            
            
            <p>{answer.magic.question}</p>
            <p>{answer.magic.answer}</p>
            
            
           
         
         </div>
         )

       }

       return (
         <p>8 ball could not return an answer.  Please try again.</p>
       )
      
    }
}


export default IndividualQuestion;