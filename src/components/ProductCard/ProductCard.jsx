import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from 'components/Button';
import { Counter } from 'components/Counter';

const useStyles = makeStyles({
  root: {
    width: 150,
    padding: '2rem',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  // title: {
  //   fontSize: 14,
  // },
  // pos: {
  //   marginBottom: 12,
  // },
});

export const ProductCard = ({ product,updateBasket, basket }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <li>
        <h3>{product.name}</h3>
        <img width="100" src={product.image} alt={product.name} />
        <div>
          Price: <b>{product.price}$</b>
        </div>
        <Counter 
        productId={ product.id}
        updateBasket={ updateBasket } 
        value={ basket[product.id] } />
        <Button>
          Buy
        </Button>
      </li>
    </Card>
  )
};