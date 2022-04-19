import styles from './ListItem.module.css';

function ListItem(props) {
  const {
    id, title, quantity, price, image, onDelete, onPlusOne, onLessOne,
  } = props;

  const deleteItem = (itemID) => {
    onDelete(itemID);
  };
  const increaseQuantity = (itemID) => {
    onPlusOne(itemID);
  };

  const reduceQuantity = (itemID) => {
    onLessOne(itemID);
  };

  const itemTotal = price * quantity;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="" />
      <div>
        <div className={styles.flex}>
          <h6 className={styles.title}>{title}</h6>
          <p className={styles.total}>
            $
            {itemTotal.toFixed(2)}
          </p>
        </div>
        <p className={styles.price}>
          $
          {price}
        </p>
        <div className={styles.flex}>
          <div className={styles.quantityGroup}>
            <button type="button" className={styles.quantityButton} onClick={() => reduceQuantity(id)}>
              -
            </button>
            <p className={styles.quantity}>{quantity}</p>
            <button type="button" className={styles.quantityButton} onClick={() => increaseQuantity(id)}>
              +
            </button>
          </div>
          <button type="button" className={styles.delete} onClick={() => deleteItem(id)}>
            Delete
          </button>
        </div>
      </div>
      <div />
    </div>
  );
}

export default ListItem;
