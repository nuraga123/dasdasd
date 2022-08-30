import { useMemo } from 'react';

import styles from './styles.module.css';

import Location from './Location';

const Header = ({ iconId, country, location }) => {
  const iconSrc = useMemo(() => {
    if (iconId) {
      return `./icon/${iconId}.svg`;
    } else {
      return `./icon/cloud.svg`;
    }
  }, [iconId]);

  return (
    <header>
      <Location 
        country={country} 
        location={location}
      />
      <div className={styles.header}>
        <img
          className={styles.icon}
          src={iconSrc}
          alt='weather-icon'
        />
      </div>
    </header>
  )
}

export default Header;