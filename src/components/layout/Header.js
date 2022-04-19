import { NavLink } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import styles from './Header.module.css';

function Header(props) {
  const { cart } = props;

  const cartCount = cart.reduce((count, product) => count + product.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>.playmakers</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              <ShoppingBagOutlinedIcon />
              {' '}
              {cartCount}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
