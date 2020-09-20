import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    loaded: false,
    stocks: [],
    portfolio: []
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

  render() {
    return this.state.loaded
      ?
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} clickListener={this.stockClickListener} />

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
