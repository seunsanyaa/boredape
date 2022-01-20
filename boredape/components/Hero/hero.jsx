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
                  <img className={herostyles.arrowRight} width={18} src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.43 5.93005L20.5 12.0001L14.43 18.0701' stroke='white' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.5 12H20.33' stroke='white' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"/>
                </button>



                <div className={herostyles.boredapeImageContainer}>

                    <img  src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642672552/Rectangle_61_ubc34h.png"/>

                </div>





                <div className={herostyles.boredapeImageDiv}>

                    <div className={herostyles.left}>

                        <img className={herostyles.circleImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642677444/Ellipse_15_arep6c.png"/>


                        <h4 className={herostyles.pokemonText}> Pokemon </h4>

                        <h4 className={herostyles.purchasedText}>

                            Purchased <span className={herostyles.bold}>Bored #23 </span> on opensea at <span className={herostyles.bold2}>327 ETH</span>
                        </h4>
                    </div>


                    <div className={herostyles.right}>


                        <h4 className={herostyles.purchasedTime}>
                            1 mins ago
                        </h4>
                    </div>






                </div>



            </div>

            <img className={herostyles.coin} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642548555/coin_1_hsbcbn.png"/>


     <img className={herostyles.righStars} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642671961/Frame_82_1_o09dsq.png"/>
<img className={herostyles.rightBackground} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642673232/Rectangle_62_1_e9il9a.png"/>
        <img className={herostyles.fadedCoin} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642675227/coin_3_cpbwdp.png"/>

        <img className={herostyles.leftStars} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642676060/Frame_81_1_mmeshb.png"/>
        </div>

        </div>
    )
}
