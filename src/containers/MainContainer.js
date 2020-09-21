import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    filteredArray: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
        .then(res=>res.json())
        .then(s => {
          const stockArray = s.map(stock => ({
            ...stock,
            purchased: false
          }))
          this.setState(()=>({
            stocks: stockArray
          }))
          console.log(stockArray)
        })
    
  }

  purchaseHandler = (stockObj) => {
    let newArray = this.state.stocks
    let foundObj = newArray.find(stock => stock.id === stockObj.id)
    foundObj.purchased = !foundObj.purchased
    this.setState(()=>({
      stocks: newArray
    }))
    console.log(this.state.stocks)
  }

  sortAlpha = () => {
    let newArray = this.state.filteredArray
    newArray.sort((a, b)=> (a.ticker > b.ticker) ? 1 : -1 )
    console.log("Sorting Stocks Alphabetically")
    this.setState(()=>({
      filteredArray: newArray
    }))
  }

  sortPrice = () => {
    let newArray = this.state.filteredArray
    newArray.sort((a,b) => (a.price > b.price) ? 1 : -1)
    console.log("Sorting Stocks Ascending by Price")
    this.setState(()=> ({
      filteredArray: newArray
    }))
  }

  filterCategory = (category) => {
    const newArray = this.state.stocks
    const filtered = newArray.filter(stock => stock.type === category)
    this.setState(()=>({
      filteredArray: filtered
    }))
  }

  render() {
    return (
      <div>
        <SearchBar sortAlpha={this.sortAlpha} sortPrice={this.sortPrice} sortCategory={this.filterCategory} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filteredArray} mainHandler={this.purchaseHandler} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.stocks} mainHandler={this.purchaseHandler} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;


/* Render all stocks onto the page
State should be kept in MainContainer since it's the parent to SearchBar, StockContainer, and Portfolio
1. add state to MainContainer
      add property called stocks: []
2. add componentDidMount and use fetch request to get array of stock objects from db.json api
      use this.setState to set stocks: stockArray
3. add a prop called 'stocks' to StockContainer component call in render, setting it to this.state.stocks
*/

/* Buy a stock
give a prop to StockContainer sellHandler
    points to MainContainer method called buyHandler()
define buyHandler()
  two methods: 1. in initial fetch then, add property using map to each object in array purchased: false
                    sellHandler() would then find that object and set purchased to true
                    define another method called purchasedStocks that filters for purchased: true
                    pass said filter method as prop to portfolio container
               2. pass object up into buyHandler()
                    add property portfolioArray to state
                    push object onto newArray
                    this.setState to set portfolioArray to newArray
                    add prop to PortfolioContainer set to this.state.portfolioArray    

*/

/* Sell a stock
give a prop to portfolio
*/

/* sort using radio buttons
1. call this.props.sortAlpha or this.props.sortPrice for onChange in either
2. 
*/