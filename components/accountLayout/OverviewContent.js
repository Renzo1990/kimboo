import React from 'react';
import styles from '../../styles/OverviewContent.module.css';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { style } from '@mui/system';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import CompareArrowsSharpIcon from '@mui/icons-material/CompareArrowsSharp';
import BuildCircleTwoToneIcon from '@mui/icons-material/BuildCircleTwoTone';


const OverviewContent = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.welcome}><font>Welcome, NICOL PLEASURE GUMEDE</font></div>
            <div className={styles.print}>
                <div className={styles.statement} >
                    <FilePresentIcon color='secondary' /> &nbsp;
                    <span>Statements and documents</span>
                </div>
                <div className={styles.statement} >
                    <LocalPrintshopOutlinedIcon color='secondary' /> &nbsp;
                    <span>Print summary</span>
                </div>
                
            </div>
        </div>
        <div className={styles.main}>
            <div className={styles.widget}>
                <div className={styles.quickPay}>
                    <h3>Quick Pay</h3>
                    <label htmlFor='search'>Recipient</label>
                    <div className={styles.searchInput}>
                        <div className={styles.input}>
                           <input type='text' id='search' placeholder='Search for recipients..' name='search' />
                        </div>
                        <div className={styles.searchIcon}>
                            <SearchOutlinedIcon style={{color: "gray"}} fontSize="large" />
                        </div>
                    </div>
                </div>
                <div className={styles.widgetItems}>
                    <div className={styles.row1}>
                        <div className={styles.widgetTitle}>
                            <h3>My Widgets</h3>
                            <div className={styles.new}>
                                <span>New</span>
                                <WidgetsOutlinedIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.end} >
                <div className={styles.row2}>
                        <div className={styles.square}>
                            <ModeEditOutlineTwoToneIcon color='secondary' />
                            <span>Savings</span>
                        </div>
                </div>

                <div className={styles.row2}>
                        <div className={styles.square}>
                            <DragIndicatorOutlinedIcon color='secondary' />
                            <span>Latest</span>
                        </div>
                </div>

                <div className={styles.row2}>
                        <div className={styles.square}>
                            <BuildCircleTwoToneIcon color='secondary' />
                            <span>Akaho</span>
                        </div>
                </div>
                
                <div className={styles.row2}>
                        <div className={styles.square}>
                            <CompareArrowsSharpIcon color='secondary' />
                            <span>Transfer</span>
                        </div>
                </div>
                
             </div> 
               
            </div>
            <div className={styles.account}>
                <div className={styles.print1}>
                    <div className={styles.statement1} >
                        <FilePresentIcon color='secondary' /> &nbsp;
                        <span>Statements and documents</span>
                    </div>
                </div>
                <div className={styles.accTitle}>
                    <div className={styles.wallet}>
                        <AccountBalanceWalletOutlinedIcon color='secondary' /> &nbsp; &nbsp;
                        <font>Everyday banking</font>
                    </div>
                    <div className={styles.wallet}>
                        <p>Current balance</p>
                    </div>
                    <div className={styles.wallet}>
                        <p>Available balance</p>
                    </div>
                </div>
                <div className={styles.accTitle}>
                    <div className={styles.currentTitle}>
                        <div className={styles.currentName}>Current Acc</div>
                        <div className={styles.number}>11909382992</div>
                    </div>
                    <div className={styles.amountC}>R<font>8930.00</font></div>
                    <div className={styles.amountA}>
                        <font>R342.90</font>&nbsp; &nbsp; &nbsp;
                            <div onClick={()=>{
                                    document.getElementById("option").style.visibility = "visible";
                                 }} className={styles.more}><MoreVertSharpIcon style={{color: "rgb(160, 167, 167)"}} />
                            </div>
                        </div>
                    <div id="option" className={styles.moreOptions}>
                        <p>Transfer</p>
                        <p>send</p>
                        <p>Others</p>
                        <div onClick={()=>{
                            document.getElementById("option").style.visibility = "hidden";
                        }} className={styles.dots}><MoreVertSharpIcon style={{color: "rgb(160, 167, 167)"}} /></div>
                        
                    </div>
                </div>
                <div className={styles.accTitle}>
                    <div className={styles.save}>Saving Account</div>
                    <div className={styles.saveA}>R &nbsp; <font>342.90</font></div>
                </div>
                <div className={styles.accTitle}>
                    <div className={styles.pocketA}>My Pocket Acc</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OverviewContent;