import propTypes from 'prop-types';
import { ProductCard } from '../ProductCard';
import styles from './ProductList.module.scss';

export const ProductList = ({ products, updateBasket, children, basket, price, priceColor }) => {
  return (
    <div>
      <h2>{children}</h2>
      <h2 style={{color: priceColor}}>{price}$</h2>
      <ul className={styles.ProductList}>
        {products.map( product => {
          return (
            <ProductCard 
              key={product.id} 
              updateBasket={ updateBasket } 
              basket={basket} 
              product={product} 
            />     
          )
        })}
      </ul>   
    </div>   
  )
}

ProductList.defaultProps = {
  children: 'Product List',
}

ProductList.propTypes = {
  children: propTypes.string,
  basket: propTypes.object.isRequired,
  updateBasket: propTypes.func.isRequired,
  price: propTypes.number.isRequired,
  priceColor: propTypes.string.isRequired,
  products: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    image: propTypes.string.isRequired,
  })).isRequired
}
