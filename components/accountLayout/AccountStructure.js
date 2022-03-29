import React from 'react';
import styles from '../../styles/AccountStructure.module.css';
import OverviewContent from './OverviewContent';
import SideBar from './SideBar';
import { sideBarState } from '../Variables/states';
import { useRecoilState } from 'recoil';
import Send from '../sidebar/Send';
import Pay from '../sidebar/Pay';
import Transfer from '../sidebar/Transfer';
import Buy from '../sidebar/Buy';
import Recipients from '../sidebar/Recipients';
import { Settings } from '@mui/icons-material';

const AccountStructure = () => {
  const [sideBar, setSideBar] = useRecoilState(sideBarState);
  return (
    <div className={styles.container}>
        <div className={styles.leftColumn}>
            <SideBar />
        </div>
        <div className={styles.rightColumn}>
            { sideBar === 0 && <OverviewContent />}
            { sideBar === 1 && <Send /> }
            { sideBar === 2 && <Pay /> }
            { sideBar === 3 && <Transfer /> }
            { sideBar === 4 && <Buy /> }
            { sideBar === 5 && <Cards /> }
            { sideBar === 6 && <Recipients /> }
            { sideBar === 7 && <Settings /> }
        </div>
    </div>
  )
}

export default AccountStructure;