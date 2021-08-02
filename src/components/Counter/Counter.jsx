import { Component } from 'react';
import styles from './Counter.module.scss';

export class Counter extends Component {
  // state = {
  //   value: 0, 
  // };

  handlePlusClick = (e) => {
    // this.setState({ value : this.state.value + 1 });
    const { productId, updateBasket, value} = this.props;
    updateBasket( productId, value + 1);
  };

  handleMinusClick = (e) => {
    const { productId, updateBasket, value} = this.props;
    if(value >= 1) {
      updateBasket( productId, value - 1);
    }
    
  };

  render() {
    const { value } = this.props;
    return (
      <div>
        <button onClick={ this.handlePlusClick }>+</button>
        <span className={styles.Value}>{ value }</span>
        <button onClick={ this.handleMinusClick}>-</button>
      </div>
    )
  }
};