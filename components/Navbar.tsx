import Link from "next/link"; 
import styles from "../styles/Home.module.css"


export default function Navbar(){
    return(
        <nav className={styles.nav}>
            <ul className={styles.navbar}>
                <Link  href={"/"}>
                    <li className={styles.li}>Home</li>
                </Link>
                <Link href={"/contact"}>
                    <li className={styles.li}>Contact </li>
                </Link>
               
            </ul>
        </nav>
    )
}