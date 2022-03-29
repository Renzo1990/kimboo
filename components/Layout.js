import React, { useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import { navbarContext } from './useContext/navbarContext';

const Layout = ({children}) => {
const [navbarNumber, setNavbarNumber] = useState(0);

  return (
    <>
       <navbarContext.Provider value={{navbarNumber, setNavbarNumber}}>
        <Navbar/>
        {children}
        <Footer/>
        </navbarContext.Provider>
    </>
  )
}

export default Layout;