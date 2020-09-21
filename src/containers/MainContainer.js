import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stockArray: [],
    boughtStock: [],
    filter: "All",
    sort: "None"
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
      .then(resp=>resp.json())
      .then(data=>this.setState({ stockArray: data }))
  }

  clickHandler = (obj) => {
    if (!this.state.boughtStock.find(el => el === obj)) {

      this.setState({ boughtStock: [...this.state.boughtStock, obj] })
    }

  }

  removeHandler = (obj) => {
    this.setState({ boughtStock: this.state.boughtStock.filter(s => s !== obj) })
    
  }

  updateSort = (sortBy) => {
    this.setState({ sort: sortBy })
  }

  calculateDisplayStocks = () => {
    let filteredStocks = [...this.state.stockArray]
    if(this.state.filter !== "All" ){
      filteredStocks = filteredStocks.filter(stock => stock.type === this.state.filter )
    }

    switch(this.state.sort){
      case "Alphabetically":
        return filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
      case "Price":
        return filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      default:
        return filteredStocks
    }


  }

  updateFilter = (type) => {
    this.setState({ filter: type })
  }

  render() {
    // let portfolioStocks = this.state.boughtStock.map(id => this.state.stockArray.find(stock => stock.id === id))
    let displayStocks = this.calculateDisplayStocks()
    return (
      <div>
        <SearchBar filter={this.state.filter} sort={this.state.sort} updateFilter={this.updateFilter} updateSort={this.updateSort} />

          <div className="row">
            <div className="col-8">

              <StockContainer stock={displayStocks} clickHandler={this.clickHandler}  />

            </div>
            <div className="col-4">

              <PortfolioContainer myStock={this.state.boughtStock} clickHandler={this.removeHandler} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
