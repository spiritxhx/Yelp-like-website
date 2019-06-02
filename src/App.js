import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import {Yelp} from './util/Yelp';

// const business = {
//   imageSrc: '',
//   id: '',
//   name: '',
//   address: '',
//   city: '',
//   state: '',
//   zipCode: '',
//   category: '',
//   rating: 0,
//   reviewCount: 0
// }
// const businesses=[
//   business, 
//   business, 
//   business, 
//   business, 
//   business,
//   business
// ];

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      businesses: []
    };
    this.searchYelp=this.searchYelp.bind(this);
  }
  searchYelp = (term, location, sortBy) => {
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({
            businesses: businesses
        });
    })
  }
  render() {
    return (
      <div className="App">
        <h1>First React project by Hans (Ravenous)</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} /> 
      </div>
    );
  }
}

