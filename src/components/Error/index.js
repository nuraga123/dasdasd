import styles from './styles.module.css';

const Error = ({ error }) => {
  return (
    <div className={styles.mask}>
      <div>
        <h1 className={styles.text}>{error}</h1>
        
        <img
          className={styles.img}
          src='./icon/error.jpg'
          alt='geolocation' 
        />
      </div>
    </div>
  )
}

export default Error;