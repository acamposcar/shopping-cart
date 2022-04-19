import ListItem from '../components/cart/ListItem';
import styles from './Cart.module.css';
import Checkout from '../components/cart/Checkout';

function Cart(props) {
  const {
    cart, onDelete, onPlusOne, onLessOne,
  } = props;

  const deleteItem = (itemID) => {
    onDelete(itemID);
    console.log(itemID);
  };

  const increaseQuantity = (itemID) => {
    onPlusOne(itemID);
  };

  const reduceQuantity = (itemID) => {
    onLessOne(itemID);
  };
  return (
    <div className={styles.flexRow}>
      <div className={styles.flexColumn}>
        { cart.map((product) => (
          <ListItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
            onDelete={deleteItem}
            onPlusOne={increaseQuantity}
            onLessOne={reduceQuantity}
          />
        ))}
      </div>
      <Checkout cart={cart} />
    </div>
  );
}

export default Cart;
