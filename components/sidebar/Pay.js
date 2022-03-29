import React from 'react';
import styles from '../../styles/Pay.module.css';

const Pay = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>How would you like to pay?</h1>
      </div>
      <div className={styles.blog}></div>
      <div className={styles.history}></div>
    </div>
  )
}

export default Pay