import styles from './styles.module.css';

const Element = ({
  tempForecast,
  text,
  dateForecast
}) => {
  return (
    <div className={styles.element}>
      <div>
        <span className={styles.text}>
          {tempForecast} °C
        </span>

        <img
          className={styles.icon}
          src={`./icon/cloud.svg`}
          alt='cloud'
        />
        <div>
          <div className={styles.text}>
            {text}
          </div>
          <div>
            {dateForecast}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Element;
