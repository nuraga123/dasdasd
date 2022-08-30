import LanguageSwitcher from '../LanguageSwitcher';
import styles from './styles.module.css';


const Location = ({ country, location }) => {
  
  return (
    <div className={styles.header}>
      <div className={styles.location}>
        <img
          className={styles.img}
          src='./icon/map.svg'
          alt='map'
        />
        <span className={styles.text}>
          {country}-
          {location}
        </span>
      </div>
      <LanguageSwitcher />
    </div>
  );
}

export default Location;