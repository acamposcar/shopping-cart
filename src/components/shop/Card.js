import styles from './Card.module.css';

function Card(props) {
  const {
    id, title, price, image, onAddToCart,
  } = props;

  const addToCart = (itemID) => {
    console.log(itemID);

    onAddToCart(itemID);
  };

  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <img src={image} alt="" />
      <button type="button" onClick={() => addToCart(id)}>
        Add to cart $
        {price}
      </button>
    </div>
  );
}

export default Card;
