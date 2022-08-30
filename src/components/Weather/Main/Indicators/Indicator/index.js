import styles from './styles.module.css';
import { useMemo } from 'react';

const Indicator = ({
  iconId,
  caption,
  numberValue,
  postfix
}) => {
  const roundedNumberValue = useMemo(() => {
    return Math.round(numberValue);
  }, [numberValue]);

  return (
    <div className={styles.indicator}>
      <img
        className={styles.img}
        src={`./icon/${iconId}.svg`}
        alt='vector'
      />
      <span className={styles.text}>
        { caption }
        { numberValue && roundedNumberValue } { postfix && <span className={styles.lower}>{ postfix }</span> }
      </span>
    </div>
  )
}

export default Indicator;