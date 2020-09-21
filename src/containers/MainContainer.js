import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sort: 'all',
    type: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => {
      this.setState(()=>( {stocks: data} ))
    })
  }

  portfolioAdd = (obj) => {
    if (!this.state.portfolio.includes(obj)) {
      this.setState({
        portfolio: [...this.state.portfolio, obj]
      })
    }
  }

  removeFromPortfolio = (obj) => {
    this.setState({
      portfolio: this.state.portfolio.filter(stock => stock!== obj)
    })
  }

  createPortfolioList = () => {
    return this.state.portfolio.filter(obj => this.state.stocks.filter(stock => stock.id === obj.id))
  }

  updateSort = method => {
    this.setState(() => ({sort: method}))
  }

  filterList = () => {
    let filteredStocks = [...this.state.stocks]
    if(this.state.type !== '') {
      filteredStocks =  filteredStocks.filter(stock => stock.type === this.state.type)
    }

    if (this.state.sort === 'Alphabetically') {
      return filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
    } else if (this.state.sort === 'Price'){
      return filteredStocks.sort((a, b) => a.price > b.price ? 1: -1)
    } else {
      return filteredStocks
    }
  }

  setType = (filterType) => {
    if (this.state.type !== filterType) {
      this.setState(()=>({type: filterType}))
    }
  }

  render() {
    console.log(this.filterList())
    return (
      <div>
        <SearchBar criteria={this.state.sort} updateSort={this.updateSort} type={this.state.type} setType={this.setType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filterList()} addPort={this.portfolioAdd}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.createPortfolioList()} removeStock={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
