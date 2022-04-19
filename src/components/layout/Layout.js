import styles from './Layout.module.css';
import Header from './Header';

function Layout(props) {
  const { children, cart } = props;
  return (
    <>
      <Header cart={cart} />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Layout;
