import styles from './Shop.module.css';
import Card from '../components/shop/Card';

function Shop(props) {
  const { products, onAddToCart } = props;

  const addToCart = (itemID) => {
    onAddToCart(itemID);
  };
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Shop;
