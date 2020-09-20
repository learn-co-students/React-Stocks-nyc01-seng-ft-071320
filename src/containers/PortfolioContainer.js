import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  rendPort=()=>{
    return this.props.favs.map(el=><Stock key={el.id} el={el} togFav={this.props.removeFav}/>)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.rendPort()
          }
      </div>
    );
  }

}



export default PortfolioContainer;
