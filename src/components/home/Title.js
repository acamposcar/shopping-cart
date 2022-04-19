import styles from './Title.module.css';
import zidane from '../../assets/zinedine_zidane.webp';

function Title() {
  return (
    <div className={styles.flex}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Awesome
          {' '}
          <span className={styles.bold}> football posters</span>
        </h1>
        <p className={styles.description}>
          A place to find football posters for your favorite team and your favorite players.
          Each can be purchased as a paper or canvas print, or as a framed poster.
        </p>
      </div>
      <img className={styles.img} src={zidane} alt="Zinedine Zidane" />
    </div>
  );
}

export default Title;
