import { Component } from 'react';
// Components //
import { ProductList } from 'components/ProductList';
// JSON //
import {products} from 'api/products.json';
// Styles //
import 'App.css';

const basket = {};
products.forEach( product => {
  basket[product.id] = 0;
} )

class App extends Component {
  state = {
    search: '',
    basket,
  }

  updateBasket = ( productId, newValue ) => {
    const { basket } = this.state;
    this.setState({ basket : { ...basket, [productId]: newValue }})
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value})
  }

  render() {
    const { search, basket } = this.state;
    const filteredProducts = products.filter( product => product.name.toLowerCase().includes(search.toLowerCase()))
    const basketMessage = products.filter( product => basket[product.id]).map ( product => {     
        return `${product.name}: ${basket[product.id]} шт.`
    });
    return (
      <div className="App">
        <div style={{ padding: '30px 10px 10px' }}>
          <input 
            onChange={ this.handleChange }
            style={{ width: '300px' }} 
            value={search} 
            type="text" 
            placeholder="Введіть товар, який Ви шукаєте"/>     
        </div>
        { basketMessage.length > 0 &&
        <h3>Ваша корзина: {basketMessage.join(',')}</h3>
        }       
        <ProductList updateBasket={ this.updateBasket } basket={basket} priceColor="tomato" products={filteredProducts} price={9.99}>
          Дуже дорога підбірка     
        </ProductList>      
      </div>
    )
    
  };
}

export default App;

