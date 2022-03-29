import React from 'react';
import Image from 'next/image';
import styles from '../styles/Carousel.module.css';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CarouselCard from './CarouselCard';

const Carousel = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.arrow}>
                <ArrowBackIosNewOutlinedIcon />
            </div>
            <div className={styles.carouselCard}>
                <CarouselCard msg="Stay untop of your finances with money tracker" img="/img/carousel.png" />
            </div>
            <div className={styles.carouselCard}>
                <CarouselCard msg="Stay untop of your finances with money tracker" img="/img/carousel.jpg" />
            </div>
            <div className={styles.arrow}>
                <ArrowForwardIosOutlinedIcon />
            </div>
        </div>

    </div>
  )
}

export default Carousel