import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Login.module.css';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const validateUser = (e) => {
        e.preventDefault();
        router.push("/overview");
    }

  return (
    <div className={styles.container}>
        <div className={styles.register}>
            <div className={styles.icon}>
                <DriveFileRenameOutlineOutlinedIcon color="secondary" fontSize='large' />
            </div>
            <div className={styles.text}>
                 <span>New to our latest online banking?</span>
                 <Link href="/register"><h2>Register</h2></Link>
            </div>
            <div className={styles.arrow}>
            <Link href="/register"><ArrowForwardIosOutlinedIcon color="secondary" fontSize='large' /></Link>
            </div>
        </div>
        <div className={styles.or}>
             <div className={styles.divider}></div>
             <div className={styles.word}>or</div>
             <div className={styles.divider}></div>
        </div>
        <div className={styles.login}>
            <h3>Login with your Kimboo ID.</h3>
            <form className={styles.form}>
                <div className={styles.input}>
                     <label className={styles.label} htmlFor='username'>Username</label>
                     <input onChange={(event)=>setUsername(event.target.value)}  required className={styles.userInput} type="text" placeholder='Username....' id="username" name='username' />
                </div>
                <div className={styles.input}>
                     <label className={styles.label} htmlFor='password'>Password</label>
                     <input onChange={(event)=>setPassword(event.target.value)}  required className={styles.userInput} type="password" placeholder='Password....' id="password" name='password' />
                </div>
                <div className={styles.submit}>
                    <span>Forgot your password?</span>
                    <br/><br/>
                    <p>By logging in I accept the <span>terms and conditions.</span></p>
                    {username !== '' && password !== '' ? <button onClick={(e)=>{
                        e.preventDefault()
                        router.push("/overview")
                    }} className={styles.user1Login}>Login</button> : <button className={styles.userLogin}>Login</button> }
                    
                </div>

            </form>
        </div>
        <div className={styles.app}>
            <div className={styles.appText}>
                <p>While you’re at it, download our new</p>
                <span>Kimboo Money App</span>
            </div>
            <div className={styles.appLogo}>
                <Image src="/img/google.png" height={40} width={130} />
                <Image src="/img/applestore.png" height={40} width={120} />
                &nbsp;&nbsp;&nbsp;
                <Image src="/img/appgallery.png" height={40} width={120} />
            </div>
        </div>
    </div>
  )
}

export default Login