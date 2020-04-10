import React, { Component } from 'react';
import QuestionHistory from './components/QuestionHistory'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {question: '',
                  answers: [],
                  apiResults: {}
                 };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  
  handleChange(event) {

    
    this.setState({ question: event.target.value
                    
                    })
  }

   handleSubmit(event) {
    
    event.preventDefault()
    const previousInput = this.state.question

    fetch(`https://8ball.delegator.com/magic/JSON/${previousInput}`)
      .then(res => res.json())

      .then((result) => {
         
         const apiTest = [...this.state.answers, result]
    
          this.setState({
              question: '',
              answers: apiTest
              
          });

      })

    
      

      
  }



  render() {
    

    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
        
      </form>
      
      <QuestionHistory answers={ this.state.answers}/>
    </div>
    )
  }
}

export default App;

