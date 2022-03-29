import React, { useContext } from 'react';
import AccountStructure from '../../components/accountLayout/AccountStructure';
import { navbarContext } from '../../components/useContext/navbarContext';
import styles from '../../styles/Overview.module.css';
import { sideBarState } from '../../components/Variables/states';
import { useRecoilState } from 'recoil';

const Overview = () => {
  const {navbarNumber, setNavbarNumber} = useContext(navbarContext);
  const [sideBar, setSideBar] = useRecoilState(sideBarState);
  return (
    <>
      {
          setNavbarNumber(1)
      }
      {
        setSideBar(0)
      }
      <AccountStructure />
    </>
  )
}

export default Overview;