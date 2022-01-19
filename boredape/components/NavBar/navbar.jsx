import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import navstyles from './navbar.module.scss'
export default function NavBar() {
    return (
    <div className={navstyles.container}>
       <div className={navstyles.nav}>

           <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642532858/Rectangle_6_ehtjyc.png"/>




           <div className={navstyles.menu}>
               <img className={navstyles.changeBackground} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642532947/Frame_75_wnvhyf.png"/>

               <a className={navstyles.menuLink}>
                   Buy An Ape

               </a>
               <a className={navstyles.menuLink}>
                 Team

               </a>
               <a className={navstyles.menuLink}>
                   Mayc

               </a>
               <a className={navstyles.menuLink}>
                Gallery

               </a>
               <a className={navstyles.menuLink}>
               Members

                   <img className={navstyles.dropdown}  src="data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.94659 0.453369H4.79326H1.05326C0.413257 0.453369 0.0932572 1.2267 0.546591 1.68004L3.99992 5.13337C4.55326 5.6867 5.45326 5.6867 6.00659 5.13337L7.31992 3.82003L9.45992 1.68004C9.90659 1.2267 9.58659 0.453369 8.94659 0.453369Z' fill='white'/%3E%3C/svg%3E%0A"/>

               </a>


               <button className={navstyles.connectWallet}>
                   Connect wallet
               </button>




           </div>


       </div>
    </div>
    )
}
