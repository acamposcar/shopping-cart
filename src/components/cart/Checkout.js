import styles from './Checkout.module.css';

function Card(props) {
  const { cart } = props;
  const totalPrice = cart.reduce((total, product) => product.quantity * product.price + total, 0);
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>Checkout</h5>
      <div className={styles.flex}>
        <p>Total</p>
        <p className={styles.total}>
          $
          {totalPrice.toFixed(2)}
        </p>
      </div>
      <button type="button" className={styles.button}>
        CHECKOUT
      </button>
    </div>
  );
}

export default Card;
