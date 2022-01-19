import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import herostyles from './hero.module.scss'
export default function Hero() {
    return (

        <div>


    <div className={herostyles.background}>

        <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642541437/Rectangle_6_2_thoehy.png"/>

    </div>





        <div className={herostyles.container}>


            <div className={herostyles.textContainer}>

                <h1 className={herostyles.header}>Welcome to the Bored Ape Yatch Club</h1>


                <p className={herostyles.paragraph}>
                    A limited NFT collection where the token itself doubles as your membership to a swamp club for apes. The club is open! Ape in with us.
                </p>



                <button className={herostyles.button}>
                   Buy An Ape
                  <img className={herostyles.arrowRight} width={15} src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.43 5.93005L20.5 12.0001L14.43 18.0701' stroke='white' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.5 12H20.33' stroke='white' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"/>
                </button>

            </div>

            <img className={herostyles.coin} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642548555/coin_1_hsbcbn.png"/>

        </div>

        </div>
    )
}
