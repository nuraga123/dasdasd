import Element from './Element';

import styles from './styles.module.css';

import i18n from '../../../services/i18n';

import { languageStore } from '../../../store';

const Footer = ({ tempForecast, dateForecast }) => {

  return (
    <footer className={styles.footer}>
      <div className={styles.elements}>
        <Element
          tempForecast={tempForecast}
          text={i18n[languageStore.value].saturday}
          dateForecast={dateForecast}
        />

        <Element
          tempForecast={tempForecast}
          text={i18n[languageStore.value].sunday}
          dateForecast={dateForecast}
        />

        <Element
          tempForecast={tempForecast}
          text={i18n[languageStore.value].monday}
          dateForecast={dateForecast}
        />

        <Element
          tempForecast={tempForecast}
          text={i18n[languageStore.value].tuesday}
          dateForecast={dateForecast}
        />
      </div>
    </footer>
  )
}

export default Footer;
