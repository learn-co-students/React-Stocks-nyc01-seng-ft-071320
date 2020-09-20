import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  owned = () => {
    if(this.props.bought.length > 0){
      return this.props.bought.map(el => <Stock key={el.id} stock={el} clickHandler={this.props.sellHandler}/>)
    }
  }

  render() {
    
    console.log("Hello from the PortfolioContainer: ", this.props)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.owned()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
