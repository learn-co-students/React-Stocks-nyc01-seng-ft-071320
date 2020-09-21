import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stockArray: [], 
    sortInput: "", 
    filterInput: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp=>resp.json())
    .then(data => {
      this.setState(()=>({
        stockArray: data
      }))
    })
  }

  buyStock = (stockObj) => {
    const configObj = {
      method: 'PATCH', 
      headers: {"Content-Type": "application/json", "Accepts": "application/json"}, 
      body: JSON.stringify({bought: true})
    }
    fetch(`http://localhost:3000/stocks/${stockObj.id}`, configObj)
    .then(resp=>resp.json())
    .then(data => {
      let newArray = this.state.stockArray
      let found = newArray.find(stock => stock.id === stockObj.id)
      found.bought = data.bought 
      this.setState(()=>({
        stockArray: newArray
      }))
    })
  }

  sellStock = (stockObj) => {
    const configObj = {
      method: 'PATCH', 
      headers: {"Content-Type": "application/json", "Accepts": "application/json"}, 
      body: JSON.stringify({bought: false})
    }
    fetch(`http://localhost:3000/stocks/${stockObj.id}`, configObj)
    .then(resp=>resp.json())
    .then(data => {
      let newArray = this.state.stockArray
      let found = newArray.find(stock => stock.id === stockObj.id)
      found.bought = data.bought 
      this.setState(()=>({
        stockArray: newArray
      }))
    })
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(()=>({
      [e.target.name]: e.target.value
    }))
  }

  sortedStocks = () => {
    if (this.state.sortInput === "Alphabetically"){
      return this.filteredStocks().sort((a, b) => a.name.localeCompare(b.name))
    } else if (this.state.sortInput === "Price"){
      return this.filteredStocks().sort((a, b) => b.price - a.price)
    } else {
      return this.filteredStocks()
    }
  }

  filteredStocks = () => {
    if (this.state.filterInput === "Finance"){
      return this.state.stockArray.filter(stock => stock.type === "Finance")
    } else if (this.state.filterInput === "Tech"){
      return this.state.stockArray.filter(stock => stock.type === "Tech")
    } else if (this.state.filterInput === "Sportswear"){
      return this.state.stockArray.filter(stock => stock.type === "Sportswear")
    } else {
      return this.state.stockArray
    }
  }


  allBoughtStocks = () => {
    return this.state.stockArray.filter(stonk => stonk.bought)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <SearchBar sortInput={this.state.sortInput} changeHandler={this.changeHandler}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.sortedStocks()} clickHandler={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.allBoughtStocks()} clickHandler={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
