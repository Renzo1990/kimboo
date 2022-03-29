import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.appVersion} >
        <span>Kimboo Online App v9.2.0.0</span><br/>
        <span>Kimboo Ltd Reg No 1951/000009/06. Authorised financial services and registered credit provider (NCRCP16).</span>
      </div>
      <div className={styles.others} >
        <h4>Contact</h4>
      </div>
      <div className={styles.others} >
          <h4>Find a branch</h4>
      </div>
      <div className={styles.others} >
           <h4>help</h4>
      </div>
      <div className={styles.others} >
            <h4>Terms and conditions</h4>
      </div>
    </div>
  )
}

export default Footer