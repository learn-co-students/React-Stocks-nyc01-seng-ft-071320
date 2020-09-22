import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  //create the state 
    //is the data loaded? container for all the stocks, 
    //container for the stocks in the portfolio, and whether 
    // the filter is "Alphbetical/Price"
  state = {
    loaded: false,
    stocksArray: [],
    portfolioArray: [],
    filter: ""
  }

  // use componentDidMount to fetch the data
  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        loaded: true,
        stocksArray: data
      })
    })
  }

  //create a stock clickHandler
  stockClickHandler = (stock) => {
    //create a new array from state
    let newArray = this.state.portfolioArray
    if(!newArray.find(portfolioStock => portfolioStock.id === stock.id)) {
      //if a stock within the portfolio that matches the id of the stock parameter
      //isn't found, then add that stock into the portfolio
      newArray.push(stock)

      //change the state of the portfolio since a new stock will be added
      this.setState({portfolio: newArray})
    }
  }

  //create a portfolio clickHandler
  portfolioclickHandler = (stock) => {
    //create a new array from the portfolio
    let newArray = this.state.portfolioArray
    //create a variable set to the index of the specific stock in the portfolio so that it can be removed
    let i = newArray.findIndex(portfolioStock => portfolioStock.id === stock.id)
    //remove the stock from the portfolio with the splice method
    newArray.splice(i, 1)
    //setState to the new portfolio array, so the removed stock doesn't show
    this.setState({portfolio: newArray})
  }

  //create a handler for the filter choices -> "Alphabetical or Price"
  filterHandler = (e) => {
    this.setState({filter: e.target.value})
  }

  //create a function that will sort the stocks Alphabetically or by Price
  sortBy = (value) => {
    if (value === "Alphabetically") {
      let names = this.state.stocksArray.map(stock => stock.name)
      let sortedNames = names.sort().map(name => {
        return this.state.stocksArray.find(stock => {return stock.name === name})
      })
      this.setState({stocksArray: sortedNames})
    } else {
      let prices = this.state.stocksArray.map(stock => stock.price)
      let sortedPrice = prices.sort((a, b) => {
        return a -b 
      }).map(price => {
        return this.state.stocksArray.find(stock => {return stock.price === price})
      })
      this.setState({stocksArray: sortedPrice})
    }
  }

  render() {
    return this.state.loaded ?
      <div>
        <SearchBar filter={this.filterHandler} sort={this.sortBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocksArray} clickHandler={this.stockClickHandler} filter={this.state.filter}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioArray} clickHandler={this.portfolioclickHandler}/>

            </div>
          </div>
      </div>
    :
    <h1>Loading Stocks...</h1>
  }

}

export default MainContainer;
