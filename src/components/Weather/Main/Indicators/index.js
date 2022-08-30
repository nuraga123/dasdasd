import { observer } from 'mobx-react';

import { languageStore } from '../../../../store';

import i18n from '../../../../services/i18n';

import styles from './styles.module.css';

import Indicator from './Indicator';

const Indicators = ({
  iconId,
  speed,
  humidity,
  information
}) => {
  return (
    <div className={styles.indicators}>

      <Indicator
        iconId='wind'
        caption={i18n[languageStore.value].wind}
        numberValue={speed}
        postfix={i18n[languageStore.value].meterage}
      />

      <div className={styles.dash}></div>

      <Indicator
        iconId='hum'
        caption={i18n[languageStore.value].humidity}
        numberValue={humidity}
        postfix="%"
      />

      <div className={styles.dash}></div>

      <Indicator
        iconId={iconId}
        caption={information}
      />

    </div>
  )
}

export default observer(Indicators);