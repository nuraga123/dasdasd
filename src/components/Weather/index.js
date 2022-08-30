import { observer } from 'mobx-react';

import useDate from '../../hooks/useDate';

import Loading from '../Loading';
import Error from '../Error'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import { languageStore } from '../../store';

import i18n from '../../services/i18n';

import styles from './styles.module.css';

const Weather = ({
  country,
  location,
  temp,
  iconId,
  loading,
  error,
  speed,
  humidity,
  information,
  tempForecast,
  dateForecast
}) => {

  const { day, month, year, dayOfWeek, time } = useDate();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error
          error={error}
        />
      ) : (
        <div className={styles.back}>
          <div className={styles.contayner}>
            <Header
              iconId={iconId}
              country={country}
              location={location}
            />
  
            <Main
              temp={temp}
              scale={'° C'}
              day={day}
              month={i18n[languageStore.value][month]}
              year={year}
              week={i18n[languageStore.value][dayOfWeek]}
              time={time}
              iconId={iconId}
              speed={speed}
              humidity={humidity}
              information={information}
            />

            <Footer
              tempForecast={tempForecast}
              dateForecast={dateForecast}
            />

          </div>
        </div>
      )
      }
    </div>
  );
}

export default observer(Weather);