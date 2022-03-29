import React from 'react';
import styles from '../../styles/SideBar.module.css';
import Link from 'next/link';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import CompareArrowsSharpIcon from '@mui/icons-material/CompareArrowsSharp';
import PaymentsSharpIcon from '@mui/icons-material/PaymentsSharp';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import { CreditCardOffSharp } from '@mui/icons-material';
import ContactsSharpIcon from '@mui/icons-material/ContactsSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { sideBarState } from '../Variables/states';
import { useRecoilState } from 'recoil';

const SideBar = () => {

    const [side, setSide] = useRecoilState(sideBarState);

  return (
    <div className={styles.container}>
        {console.log(side)}
        <header onClick={()=> (setSide(0))}><HomeOutlinedIcon style={{color: "purple"}}/>  <span>Overview</span></header>
        <div onClick={() => (setSide(1))} className={styles.send}>
            <div className={styles.sendIcon}>
                <SendSharpIcon color='secondary' />
            </div>
            <div className={styles.sendText}>
                <font>Send</font>
            </div>
        </div>
        <div onClick={()=>setSide(2)} className={styles.send}>
            <div className={styles.sendIcon}>
                <PaymentsSharpIcon color='secondary' />
            </div>
            <div className={styles.sendText}>
                <font>Pay </font>
            </div>
        </div>
        <div onClick={()=>setSide(3)} className={styles.send}>
            <div className={styles.sendIcon}>
                <CompareArrowsSharpIcon fontSize='small'/>
            </div>
            <div className={styles.sendText}>
                <font>Transfer</font>
            </div>
        </div>
        <div onClick={()=>setSide(4)} className={styles.send}>
            <div className={styles.sendIcon}>
                <InventorySharpIcon color='secondary' />
            </div>
            <div className={styles.sendText}>
                <font>Buy</font>
            </div>
        </div>
        <div onClick={()=>setSide(5)} className={styles.send}>
            <div className={styles.sendIcon}>
                <CreditCardOffSharp color='secondary' />
            </div>
            <div className={styles.sendText}>
                <font>Cards</font>
            </div>
        </div>
        <div onClick={()=>setSide(6)} className={styles.send}>
            <div className={styles.sendIcon}>
                <ContactsSharpIcon color='secondary' />
            </div>
            <div className={styles.sendText}>
                <font>Recipients</font>
            </div>
        </div>
        <div onClick={()=>setSide(7)} className={styles.send}>
            <div className={styles.sendIcon}>
                <SettingsIcon color='secondary' />
            </div>
            <div className={styles.sendText}>
                <font>Settings</font>
            </div>
        </div>
        

    </div>
  )
}

export default SideBar;