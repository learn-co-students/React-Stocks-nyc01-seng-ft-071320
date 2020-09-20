import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    data:[],
    favs:[],
    type:"All",
    radio:"Alphabetically"
  }

  
  componentDidMount=()=>{
    fetch('http://localhost:3000/stocks')
    .then(res=>res.json())
    .then(string=>{
      this.setState(()=>({data:string}))
    })
  }
  
  getFav=(obj)=>{
    console.log("grab fav", obj)
    if(!this.state.favs.includes(obj)){
      let newArray = [...this.state.favs,obj]
      this.setState(()=>({favs:newArray}))
    }
    console.log(this.state.favs)
  }

  removeFav=(obj)=>{
    console.log("remove fav", obj)
    let newArray = [...this.state.favs]
    let revised = newArray.filter(el=>el.id!==obj.id)
    this.setState(()=>({favs:revised}))
  }
  
  updateCats=(obj)=>{
    console.log("updating the type",obj)
    this.setState(()=>({type:obj}))
  }

  updateRadio=(obj)=>{
    console.log("updating the radio button",obj)
    this.setState(()=>({radio:obj}))
  }

  handleRadio=()=>{
    if(this.state.radio==="Alphabetically"){
      return this.state.data.sort((a,b)=>a.ticker>b.ticker ? 1 : -1)
    }else{
      return this.state.data.sort((a,b)=>a.price-b.price)
    }
  }

  handleSearch=()=>{
    if (this.state.type==="All") {
      return this.handleRadio()
    } else {
      return this.handleRadio().filter(el=>el.type===this.state.type)
    }
  }

  render() {
    console.log("this is my states", this.state)
    return (
      <div>
        <SearchBar updateRadio={this.updateRadio} updateCats={this.updateCats} radio={this.state.radio} type={this.state.type}/>

          <div className="row">
            <div className="col-8">

              <StockContainer getFav={this.getFav} data={this.handleSearch()}/>

            </div>
            <div className="col-4">

              <PortfolioContainer favs={this.state.favs} removeFav={this.removeFav} arrayStates={this.state.arrayStates}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
