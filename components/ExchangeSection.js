import React from 'react';
import styles from '../styles/ExchangeSection.module.css';
import Image from 'next/image';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';

const ExchangeSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.exchangeText}>
            <div className={styles.img}>
                <Image src="/img/buss.png" alt='' height={250} width={200} />
            </div>
            <div className={styles.text}>
                <h1>12 ZAR to CEAC Franc XAF</h1>
                <h3>Convert XAF to ZAR at best rate</h3>
                <h4>Do your transfer here..</h4>
            </div>
        </div>
        <div className={styles.exchangeCard}>
                <div className={styles.exchangeInput}>
                    <div className={styles.amountText}>
                         <label htmlFor='from'>Amount</label>
                    </div>
                    <div className={styles.convert}>
                         <input className={styles.input} type="number" id='from' name='from' placeholder='1000' />
                         <select style={{height: "30px", color: 'white', backgroundColor: "purple"}} className={styles.select} name="currency"  className={styles.currency}>
                             <option value="XAF">XAF</option>
                             <option value="ZAR">ZAR</option>
                         </select>
                    </div>
                </div>
                <div className={styles.convertLogo}>
                    <br/>
                    <CompareArrowsOutlinedIcon color='secondary' fontSize='large' />
                </div>
                <div className={styles.exchangeInput}>
                    <div className={styles.amountText}>
                         <label htmlFor='to'>Convert to</label>
                    </div>
                    <div className={styles.convert}>
                         <input className={styles.input} type="number" id='to' name='to' />
                         <select style={{height: "30px", color: 'white', backgroundColor: "purple"}} className={styles.select} name="currency"  className={styles.currency}>
                             <option value="ZAR">ZAR</option>
                             <option value="XAF">XAF</option>
                         </select>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ExchangeSection