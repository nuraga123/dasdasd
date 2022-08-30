import styles from './styles.module.css';

const Loading = () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
    }, 600);
  });

  return (
    <div className={styles.mask}>
      <div>
        <div className={styles.loader}></div>
      </div>
    </div>
  )
}

export default Loading;