import Card from '../components/shop/Card';

function Shop(props) {
  const { products, onAddToCart } = props;

  const addToCart = (itemID) => {
    onAddToCart(itemID);
  };
  return (

    products.map((product) => (
      <Card
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        onAddToCart={addToCart}
      />
    ))

  );
}

export default Shop;
