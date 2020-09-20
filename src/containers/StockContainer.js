import React from 'react';
import Stock from '../components/Stock'

class StockContainer extends React.Component {

  state={
    data:[]
  }
  
  getStocks=()=>{
    return this.state.data.map(el=><Stock key={el.id} el={el}/>)
  }
  
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.getStocks()
        }
      </div>
    );
  }
}

componentDidMount=()=>{
  fetch('http://localhost:3000/stocks')
  .then(res=>res.json())
  .then(string=>{
    this.setState(()=>({data:string}))
  })
}

export default StockContainer;
