import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';


 function App({ Component, pageProps, router }: AppProps) {
  return (  
  <div className={styles.app}>
    <Navbar/>                                                                                                                                                                  
    <AnimatePresence mode={"wait"}>
      <Component key={router.pathname} {...pageProps}/>
    </AnimatePresence>
  </div>
  )
}

export default App;
