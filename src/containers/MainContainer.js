import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocksArray: [],
    portfolioArray: [],
    filterType: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks/')
      .then(resp => resp.json())
      .then(stocks => this.setState(() => ({ stocksArray: stocks })))
  }

  appBuyHandler = (stock) => {
    this.setState((previousState) => ({ portfolioArray: [...previousState.portfolioArray, stock] }))
  }

  appSellHandler = (stock) => {
    let newArray = this.state.portfolioArray
    newArray.splice(newArray.indexOf(stock), 1)
    this.setState(() => ({ portfolioArray: newArray }))
  }

  filterStocksByTicker = (filterMethod) => {
    let newArray

    if (filterMethod === "Alphabetically") {
      console.log('A')
      newArray = this.state.stocksArray.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      });
    } else if (filterMethod === "Price") {
      newArray = this.state.stocksArray.sort(function (a, b) { return b.price - a.price });
    }

    this.setState(() => ({ stocksArray: newArray }))
  }

  filterStocksByType = (filterType) => {
    this.setState(() => ({ filterType: filterType }))
  }

  newArray = () => {
    let newArray = this.state.stocksArray
    return newArray.filter(stock => stock.type === this.state.filterType)
  }

  render() {
    return (
      <div>
        <SearchBar appTickHandler={this.filterStocksByTicker} appFilterHandler={this.filterStocksByType} />

        <div className="row">
          <div className="col-8">

            <StockContainer stocks={this.state.filterType ? this.newArray() : this.state.stocksArray} appClickHandler={this.appBuyHandler} />

          </div>
          <div className="col-4">

            <PortfolioContainer portfolio={this.state.portfolioArray} appClickHandler={this.appSellHandler} />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
