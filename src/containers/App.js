
import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import ButtonList from '../components/ButtonList';
import ChuckQuote from '../components/ChuckQuote';


class App extends Component {

	constructor() {
		super();
		this.state = {
			topic: '',
			chuckQuote: ''};
	}

  getQuote = (subject) => {
    console.log(subject);
    this.setState({ topic: subject });
     fetch(`https://api.chucknorris.io/jokes/random?category=${subject}`)
     .then(respQuote => respQuote.json())
     .then(dispQuote => { this.setState({chuckQuote: dispQuote.value} ) })
  }

  render() {

    return (

      <div className='tc' style={{ fontFamily: 'ComicHelvetic'}}>

        <h1 style = {{ color: '#FFC300' }}> Chuck Norris Memes </h1>
        <p className = 'f3' style = {{ color: 'black' }}> the very best of Chuck Norris jokes </p>
        <ChuckQuote chuckQuoteToDisp={this.state.chuckQuote} topic={this.state.topic} />
        <ButtonList getChuckQuote={this.getQuote} />
      </div>

      );
  
  }

}



export default App;
