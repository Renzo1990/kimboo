import React, {useContext} from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { navbarContext } from './useContext/navbarContext';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = (props) => {
  const {navbarNumber, setNavbarNumber} = useContext(navbarContext);
  return (
      <>
         {navbarNumber == 0 && 
          <div className={styles.container}>
              <div className={styles.logo} >
                 <Link href="/"><Image src="/img/kimbo.png" height={170} width={150} alt="" /></Link>
             </div>
             <div className={styles.address}>
                 <div className={styles.chat}>
                    <div className={styles.chatIcon}>
                        <ChatOutlinedIcon color="secondary" fontSize="medium"/>
                    </div>
                 <div className={styles.chatText}>Kimboo Chat</div>
              </div>
              <div className={styles.locator}>
                  <div className={styles.locatorIcon}>
                    <LocationOnOutlinedIcon color="secondary" />
                  </div>
              <div className={styles.locatorText}>Location</div>
              </div>
             <div className={styles.contact}>
                <div className={styles.contactIcon}>
                     <PhoneInTalkIcon color="secondary"/>
                </div>
                <div className={styles.contactText}>+27 0 800 555 111</div>
             </div>
             </div>
        </div>
       }
       {
         navbarNumber == 1 && 
         <div className={styles.container1} >
             <div className={styles.logo} >
                 <Link href="/"><Image src="/img/kimbo1.png" height={170} width={150} alt="" /></Link>
            </div>
            <div></div>
            <div></div>
             <div className={styles.address1}>
                  <div className={styles.chat1}>
                    Get in touch
                  </div>
              <div className={styles.notification}>
                  <div className={styles.notificationIcon}>
                    <NotificationsNoneRoundedIcon style={{color: "white"}} />
                  </div>
              </div>
             <div className={styles.chatApp}>
                <div className={styles.chatAppIcon}>
                     <ChatOutlinedIcon style={{color: "white"}} />
                </div>
              </div>
              <div className={styles.initial}>
                <span>NP</span>
              </div>
             </div>
             <div className={styles.logout}><span>Log out</span></div>
             <div className={styles.menuIcon}>
               <MenuOutlinedIcon style={{color: "white"}} />
             </div>
         </div>
       }

    </>
  )
}

export default Navbar