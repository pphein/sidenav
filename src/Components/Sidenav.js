import { navData } from "../lib/navData";
import KeyboardDoubleArrowLeftIcon  from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from './sidenav.module.css';

export default function Sidenav() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open)
  }
  return (        
    // <div>
    //     <button className={styles.menuBtn}>
    //         <KeyboardDoubleArrowLeftIcon />
    //     </button>
    //     {/* { navData.map(item => {
    //             return (
    //                 <div key={item.id} className={styles.sideitem}>
    //                     {item.icon}
    //                     <span className={styles.linkText}>{item.text}</span>
    //                 </div>
    //             )
    //         })
    //     } */}
    //     {navData.map(item => {
    //         return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
    //                 {item.icon}
    //                 <span className={styles.linkText}>{item.text}</span>
    //             </NavLink>
    //     })}
    // </div> 
    <div className={open?styles.sidenav:styles.sidenavClosed}>
        <button className={styles.menuBtn} onClick={toggleOpen}>
                {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
        </button>
        {navData.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                    {item.icon}
                    <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
                </NavLink>
        })}
    </div>   
  )
}