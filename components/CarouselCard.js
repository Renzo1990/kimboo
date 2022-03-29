import React from 'react';
import Image from 'next/image';
import styles from '../styles/CarouselCard.module.css';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const CarouselCard = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.img}>
            <Image src={props.img} height={230} width={245} alt='' />
        </div>
        <div className={styles.text}>
            <p>{props.msg}</p>
        </div>
        <div className={styles.link}>
            <span>Find out more  <ArrowForwardOutlinedIcon fontSize='small' color='secondary' /> </span>
        </div>
    </div>
  )
}

export default CarouselCard