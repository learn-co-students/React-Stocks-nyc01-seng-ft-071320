import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    loaded: false,
    stocks: [],
    portfolio: [],
    filter: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => {
      console.log(stocks)
      this.setState({
        loaded: true,
        stocks: stocks
      })
    })
  } 

  stockClickListener = (stock) => {
    let newArray = this.state.portfolio
    if (!newArray.find(portStock => portStock.id === stock.id)) {
      newArray.push(stock)
      this.setState({portfolio: newArray})
    }
  }

  portfolioClickListener = (stock) => {
    let newArray = this.state.portfolio
    let index = newArray.findIndex(portStock => portStock.id === stock.id)
    newArray.splice(index, 1)
    this.setState({portfolio: newArray})
  }

  filterHandler = (e) => {
    this.setState({filter: e.target.value})
  }

  sortBy = (value) => {
    if (value === "Alphabetically") {    
      let names = this.state.stocks.map(stock => stock.name)
      let sortedArray = names.sort().map(name => {
        return this.state.stocks.find(stock => {return stock.name === name})
        })
      console.log(sortedArray)
      this.setState({stocks: sortedArray})
    } else {      
      let prices = this.state.stocks.map(stock => stock.price)
      let sortedArray = prices.sort((a, b) => {
        return a - b
      }).map(price => {
        return this.state.stocks.find(stock => {return stock.price === price})
        })
      console.log(sortedArray)
      this.setState({stocks: sortedArray})
    }
  }

  render() {
    return this.state.loaded
      ?
      <div>
        <SearchBar filterHandler={this.filterHandler}  sort={this.sortBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} clickListener={this.stockClickListener} filter={this.state.filter} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} clickListener={this.portfolioClickListener} />

            </div>
          </div>
      </div>
      :
      <h1>loading...</h1>
  }

}

export default MainContainer;
