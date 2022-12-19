import styles from '../styles/Home.module.css'
import {motion as m } from "framer-motion"
import Navbar from '../components/Navbar';

 function Contact(){
    return(
        <>
        <Navbar/>
        <m.div
        initial = {{y: "100%" }}
        animate = {{y: "0%" }}
        transition = {{duration:0.75, ease: "easeOut" }}
        exit={{ opacity:1}} 
        className = {styles.bgcolor2} 
        >    
            <m.main className={styles.main}>
                <div className={styles.titlebox}>
                    <h1 className={styles.h1}>Contact</h1>
                </div>
                <div className={styles.titlebox}>
                    <h1 className={styles.h1}>Contact</h1>
                </div>
            </m.main>
            
        </m.div>
        </>
    )
}

export default Contact;