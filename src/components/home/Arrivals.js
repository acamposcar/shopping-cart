import styles from './Arrivals.module.css';
import maradona from '../../assets/diego_maradona.webp';

function Title() {
  return (
    <div className={styles.flex}>
      <img className={styles.img} src={maradona} alt="Diego Maradona" />
      <div className={styles.info}>
        <h3 className={styles.title}>New arrivals</h3>
        <p className={styles.description}>
          A place to find football posters for your favorite team and your favorite players.
          Each can be purchased as a paper or canvas print, or as a framed poster.
        </p>
        <button className={styles.button} type="button">SHOP NOW</button>
      </div>
    </div>
  );
}

export default Title;
