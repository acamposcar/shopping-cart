import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ForestIcon from '@mui/icons-material/Forest';
import SendIcon from '@mui/icons-material/Send';
import styles from './Shipping.module.css';

function Shipping() {
  return (
    <div className={styles.background}>
      <div className={styles.grid}>
        <div className={styles.group}>
          <LocalShippingIcon sx={{ color: 'white' }} />
          <div className={styles.info}>
            <h4 className={styles.title}>Fast and free shipping</h4>
            <p className={styles.description}>
              Every single order ships for free. No minimums, no tiers.
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <ForestIcon sx={{ color: 'white' }} />
          <div className={styles.info}>
            <h4 className={styles.title}>Premium materials</h4>
            <p className={styles.description}>
              We use material like sustainably-forested wood and steel hardware.
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <SendIcon sx={{ color: 'white' }} />
          <div className={styles.info}>
            <h4 className={styles.title}>Modular design</h4>
            <p className={styles.description}>
              Our innovative modular design should fit your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
