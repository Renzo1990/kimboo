import React from 'react';
import styles from '../styles/DefaultPageContent.module.css';
import Login from './Login';
import RightContent from './RightContent';

const DefaultPageContent = () => {
  return (
    <div className={styles.container}>
        <div className={styles.right}>
            <RightContent />
        </div>
        <div className={styles.left}>
            <Login />
        </div>
    </div>
  )
}

export default DefaultPageContent