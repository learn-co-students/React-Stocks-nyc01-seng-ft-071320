import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    originalstocks: [],
    stocks: []
  }


  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(data => {
      this.setState({
        originalstocks: data,
        stocks: data
      })
    })
  }

  buyHandler = (stockObj) => {
    fetch(`http://localhost:3000/stocks/${stockObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify({
        bought: true
      })
    }).then(response => response.json())
    .then(updatedObj => {
      if(updatedObj.id === stockObj.id){
        let newArray = [...this.state.stocks]
        let found = newArray.find(stock => stock.id === updatedObj.id)
        found.bought = updatedObj.bought
        this.setState({
          stocks: newArray
        })
      }
    })
  }

  sellHandler = (stockObj) => {
    fetch(`http://localhost:3000/stocks/${stockObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify({
        bought: false
      })
    }).then(response => response.json())
    .then(updatedObj => {
      if(updatedObj.id === stockObj.id){
        let newArray = [...this.state.stocks]
        let found = newArray.find(stock => stock.id === updatedObj.id)
        found.bought = updatedObj.bought
        this.setState({
          stocks: newArray
        })
      }
    })
  }

  filterAlphabetically = () => {
    let newArray = this.state.stocks.sort((a ,b) => {   
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    this.setState({
      stocks: newArray
    })
    
  }

  filterAscending = () => {
    let newArray = this.state.stocks.sort((a ,b) => {   
      let priceA = a.price
      let priceB = b.price
      return (priceA < priceB) ? 1 : (priceA > priceB) ? -1 : 0;
    })
    this.setState({
      stocks: newArray
    })    
  }

  filterCategory = (e) => {

    let newArray = this.state.originalstocks.filter(stock => {
      return e.target.value === stock.type
    })
    this.setState({
      stocks: newArray
    }) 
  }

  filterBoughtStocks = () => {
    return this.state.stocks.filter(stock => {
      return stock.bought
    })
  }

  render() {
    console.log(this.state.stocks)
    return (
      <div>
        <SearchBar filterAlphabetically={this.filterAlphabetically} filterAscending={this.filterAscending} filterCategory={this.filterCategory}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} changeHandler={this.buyHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.filterBoughtStocks()} changeHandler={this.sellHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
