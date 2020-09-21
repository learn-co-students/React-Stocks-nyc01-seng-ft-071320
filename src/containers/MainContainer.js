import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    favorites: []
  }

  appClickHandler =(obj) =>{
    if(!this.state.favorites.includes(obj)){
      console.log("this is James' hand", obj)
      let newArray = [obj, ...this.state.favorites]
      this.setState({ favorites: newArray})
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(response => response.json())
    .then(stocks => this.setState({stocks: stocks}))
  }

  render() {
    console.log(this.state.favorites)
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer appClickHandler={this.appClickHandler} stocks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer favorites={this.state.favorites}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
