import React from 'react';
import Stock from '../components/Stock'

class StockContainer extends React.Component {

  getStocks=()=>{
    return this.props.data.map(el=><Stock key={el.id} el={el} togFav={this.props.getFav}/>)
  }
  
  render() {
    console.log(this.props)
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



export default StockContainer;
