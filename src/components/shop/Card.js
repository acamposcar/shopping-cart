import styles from './Card.module.css';

function Card(props) {
  const {
    id, title, price, image, onAddToCart,
  } = props;

  const addToCart = (itemID) => {
    onAddToCart(itemID);
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="" />
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.price}>
        $
        {price}
      </p>
      <button type="button" className={styles.button} onClick={() => addToCart(id)}>
        ADD TO CART
      </button>
    </div>
  );
}

export default Card;
