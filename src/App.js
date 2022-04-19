import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Layout from './components/layout/Layout';
import products from './data/products';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const getProductByID = (itemID) => products.find((product) => product.id === itemID);

  const deleteItem = (itemID) => {
    setCart((prevState) => prevState.filter((product) => product.id !== itemID));
  };

  const increaseQuantity = (itemID) => {
    setCart((prevState) => {
      if (prevState.length > 0) {
        const itemExist = prevState.find((product) => product.id === itemID);
        if (itemExist) {
          return prevState.map((product) => {
            if (product.id !== itemID) return product;
            return { ...product, quantity: product.quantity + 1 };
          });
        }
      }
      // Initialize quantity
      const product = { ...getProductByID(itemID), quantity: 1 };
      return [...prevState, product];
    });
  };

  const reduceQuantity = (itemID) => {
    setCart((prevState) => prevState.map((product) => {
      if (product.id !== itemID) return product;
      // Quantity can't be less than 1
      const newQuantity = product.quantity > 1 ? product.quantity - 1 : 1;
      return { ...product, quantity: newQuantity };
    }));
  };

  return (
    <BrowserRouter>
      <Layout cart={cart}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop products={products} onAddToCart={increaseQuantity} />} />
          <Route path="/cart" element={<Cart cart={cart} onDelete={deleteItem} onPlusOne={increaseQuantity} onLessOne={reduceQuantity} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
