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
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        {title}
        {' '}
        {quantity}
        {' '}
        {price}
        {' '}
      </div>
      <img src={image} alt="" />
      <button type="button" onClick={() => deleteItem(id)}>
        Delete
      </button>
      <button type="button" onClick={() => increaseQuantity(id)}>
        +
      </button>
      <button type="button" onClick={() => reduceQuantity(id)}>
        -
      </button>
    </div>
  );
}

export default ListItem;
