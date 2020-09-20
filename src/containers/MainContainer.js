import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const baseUrl = "http://localhost:3000/stocks"

class MainContainer extends Component {

  state = {
    stocks: [],
    bought: []
  };

  componentDidMount() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(response => {
      console.log("This is the return data: ", response)
      this.setState({ stocks: response })})
  }

  clickHandler = (props) => {
    console.log("Click has been sent back to main", props)
    if(this.state.bought.includes(props)){
      this.setState({ bought: this.state.bought })
    } else {
      this.setState({ bought: [props, ...this.state.bought ]})
    }
  }

  sellHandler = (props) => {
    console.log("Click has been sent back to main from owned stocks", props)
    if(this.state.bought.includes(props)){
      console.log("Uhh................................................................")
      let newArray = this.state.bought
      let newnewArray = newArray.filter(el => el.id !== props.id)
      this.setState({ bought: newnewArray })
    }
  }

  filterHandler = (e, props) => {
    console.log("The current filter is: ", e.target.value, props.filtering)
    let filteringArr = props.stocks
    if(e.target.name === "radio"){
      if(e.target.value === "Alphabetically"){
        let namesArr = props.filtering.map(el => el.ticker)
        let sortedNames = namesArr.sort()
        let fullySorted = []
        sortedNames.forEach(ticker => {  
          props.filtering.forEach(stockObj => {
            if(stockObj.ticker === ticker){
              fullySorted.push(stockObj)
            }
          })
        })
        this.setState({ stocks: fullySorted })
      } else if(e.target.value === "Price"){
        let namesArr = props.filtering.map(el => el.price)
        namesArr.sort((a, b) => a - b);
        let fullySorted = []
        namesArr.forEach(price => {  
          props.filtering.forEach(stockObj => {
            if(stockObj.price === price){
              fullySorted.push(stockObj)
            }
          })
        })
        this.setState({ stocks: fullySorted })
        console.log("GREATEDKFLJDSFKJLDSJFKLDS")
      } 
    }
  }

  dropdown = (e, props) => {
    if(e.target.value === "Tech"){
      let newArr = props.filtering.filter(el => el.type === "Tech")
      this.setState({ stocks: newArr })
    } else if (e.target.value === "Sportswear") {
      let newArr = props.filtering.filter(el => el.type === "Sportswear")
      this.setState({ stocks: newArr })
    } else if (e.target.value === "Finance") {
      let newArr = props.filtering.filter(el => el.type === "Finance")
      this.setState({ stocks: newArr })
    }
  }
  

  render() {
    console.log("The current state in render: ", this.state.stocks)
    console.log("The current boughtstocks are: ", this.state.bought)
    return (
      <div>
        <SearchBar filtering={this.state.stocks} filterHandler={this.filterHandler} dropdown={this.dropdown}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} clickHandler={this.clickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer bought={this.state.bought} sellHandler={this.sellHandler} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
