import ListItem from '../components/cart/ListItem';

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
    cart.map((product) => (
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
    ))
  );
}

export default Cart;
