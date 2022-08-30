import classNames from 'classnames';
import { observer } from 'mobx-react';

import { languageStore } from '../../../../store';

import styles from './styles.module.css';

const buttons = [
  {
    value: 'ru',
    content: 'RU',
  },
  {
    value: 'en',
    content: 'EN',
  }
];

const LanguageSwitcher = () => {
  const handleClick = (event) => {
    languageStore.setValue(event.target.attributes['data-value'].value);
  };

  return (
    <div>
      {
        buttons.map(({ value, content }) => (
          <button
            className={classNames(styles.button, { [styles.active]: languageStore.value === value })}
            disabled={languageStore.value === value}
            key={value}
            data-value={value}
            onClick={handleClick}
          >
            { content }
          </button>
        ))
      }
    </div>
  );
}

export default observer(LanguageSwitcher);