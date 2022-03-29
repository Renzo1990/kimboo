import React, { useState } from 'react';
import styles from '../../styles/Register.module.css';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Link from 'next/link';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState('');
    const [term, setTerm] = useState("");

    

    

  return (
    <div className={styles.container}>
        <Link href="/">
          <div className={styles.back}>
              <ArrowBackOutlinedIcon color="secondary"/>
              <h4>Back</h4>
          </div>
        </Link>
        <h4>Let's get Started</h4>
        <p>Please enter your information below</p>
        <div className={styles.login}>
            <h3>Create your Kimboo Account here...</h3>
            <form className={styles.form}>
                <div className={styles.input}>
                     <label className={styles.label} htmlFor='name'>Full Names*</label>
                     <input onChange={(event)=>setName(event.target.value)}  required className={styles.userInput} type="text" placeholder='John Doe....' id="name" name='name' />
                </div>
                <div className={styles.input}>
                     <label className={styles.label} htmlFor='email'>Email*</label>
                     <input onChange={(event)=>setEmail(event.target.value)}  required className={styles.userInput} type="text" placeholder='email@gmail.com' id="email" name='email' />
                </div>
                <div className={styles.input}>
                     <label className={styles.label} htmlFor='phone'>Phone Number*</label>
                     <input onChange={(event)=>setPhoneNumber(event.target.value)}  required className={styles.userInput} type="text" placeholder='+2778900002....' id="phone" name='phone' />
                </div>
                <div className={styles.input}>
                     <label className={styles.label} htmlFor='country'>Nationality*</label>
                     <input onChange={(event)=>setCountry(event.target.value)}  required className={styles.userInput} type="text" placeholder='South Africa....' id="country" name='country' />
                </div>
                <div className={styles.input}>
                     <label className={styles.label} htmlFor='address'>Address*</label>
                     <input onChange={(event)=>setAddress(event.target.value)}  required className={styles.userInput} type="text" placeholder='123 soweto str....' id="address" name='address' />
                </div>
                <div className={styles.input}>
                     <label className={styles.label} htmlFor='password'>Password</label>
                     <input onChange={(event)=>setPassword(event.target.value)}  required className={styles.userInput} type="password" placeholder='Password....' id="password" name='password' />
                </div>
                <br/>
                <div className={styles.terms}>
                    <input type="checkbox" value="accept" onChange={(event)=>(setTerm(event.target.value))} />
                    <p> &nbsp; I accept the <span>terms and conditions.</span></p>
                </div>
                <div className={styles.submit}>
                    {country !== '' && password !== '' && name !== '' && email !== '' && phoneNumber !== '' && term !== '' ? <button className={styles.user1Login}>Login</button> : <button className={styles.userLogin}>Login</button> }
                    
                </div>

            </form>
        </div>

    </div>
  )
}

export default Register