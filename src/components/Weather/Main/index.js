import { useMemo } from 'react';

import Indicators from './Indicators';

import styles from './styles.module.css';

const Main = ({
  temp = 0,
  scale,
  day,
  month,
  year,
  week,
  time,
  iconId,
  speed,
  humidity,
  information
}) => {
  const roundedTemp = useMemo(() => {
    return Math.round(temp);
  }, [temp]);

  return (
    <main className={styles}>
      
      <div className={styles.temperature}>
        <span className={styles.number}>
          { roundedTemp }
        </span>
        <span className={styles.meterage}>
          { scale }
        </span>
      </div>

      <div className={styles.date}>
        { day + ' ' }
        { month + ' ' }
        { year }

        <div className={styles.time}>
          { week }
          <div className={styles.dash}></div>
          { time }
        </div>
        
      </div>

      <Indicators
        iconId={ iconId }
        speed={ speed }
        humidity={ humidity }
        information={ information }
      />
    </main>
  )
}

export default Main;