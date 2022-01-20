import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import newreleasesStyle from './newreleases.module.scss'
export default function NewReleases() {
    return (
  <div className={newreleasesStyle.container}>

      <div className={newreleasesStyle.headers}>

          <h3 className={newreleasesStyle.bigHeader}>
              New Releases

          </h3>


          <h3 className={newreleasesStyle.viewAll}>
              View all Apes
          </h3>

      </div>


      <div className={newreleasesStyle.cardContainer}>

          <div className={newreleasesStyle.mayc}>

              <h3 className={newreleasesStyle.maycheader}>
                  MAYC
              </h3>


              <div className={newreleasesStyle.baycContainer}>
                  <h3 className={newreleasesStyle.baycHeader}>
                      BAYC
                  </h3>

                  <p className={newreleasesStyle.paragraph}>
                      See the list of added Bored  Ape NFTs
                  </p>


              </div>



          </div>

          <div className={newreleasesStyle.cards}>
              <div className={newreleasesStyle.singleCard}>

                  <img className={newreleasesStyle.cardImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642700970/Rectangle_384_2_xfynvj.png"/>

                  <h3 className={newreleasesStyle.cardHeader}>
                      Bored #0
                  </h3>
<div className={newreleasesStyle.links}>
                  <a className={newreleasesStyle.cardLink}>
                     <span className={newreleasesStyle.buyTheApe}>Buy The Ape </span>


                          <img className={newreleasesStyle.cardArrow} src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.43 5.92999L20.5 12L14.43 18.07' stroke='url(%23paint0_linear_1_244)' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.5 12H20.33' stroke='url(%23paint1_linear_1_244)' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_244' x1='14.692' y1='10.8619' x2='20.5003' y2='10.8769' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23DA4453'/%3E%3Cstop offset='0.9998' stop-color='%2389216B'/%3E%3Cstop offset='0.9999' stop-color='%23C4C3C3' stop-opacity='0.0104167'/%3E%3Cstop offset='1' stop-color='%23C4C4C4' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_244' x1='4.22647' y1='12.4062' x2='20.2088' y2='13.803' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23DA4453'/%3E%3Cstop offset='0.9998' stop-color='%2389216B'/%3E%3Cstop offset='0.9999' stop-color='%23C4C3C3' stop-opacity='0.0104167'/%3E%3Cstop offset='1' stop-color='%23C4C4C4' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"/>

                  </a>


<img className={newreleasesStyle.heart} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642704099/Frame_64_3_beod6f.png"/>

</div>
              </div>



              <div className={newreleasesStyle.singleCard}>

                  <img className={newreleasesStyle.cardImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642709902/Rectangle_384_3_zolyzh.png"/>

                  <h3 className={newreleasesStyle.cardHeader}>
                      Bored #0
                  </h3>
                  <div className={newreleasesStyle.links}>
                      <a className={newreleasesStyle.cardLink}>
                          <span className={newreleasesStyle.buyTheApe}>Buy The Ape </span>


                          <img className={newreleasesStyle.cardArrow} src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.43 5.92999L20.5 12L14.43 18.07' stroke='url(%23paint0_linear_1_244)' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.5 12H20.33' stroke='url(%23paint1_linear_1_244)' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_244' x1='14.692' y1='10.8619' x2='20.5003' y2='10.8769' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23DA4453'/%3E%3Cstop offset='0.9998' stop-color='%2389216B'/%3E%3Cstop offset='0.9999' stop-color='%23C4C3C3' stop-opacity='0.0104167'/%3E%3Cstop offset='1' stop-color='%23C4C4C4' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_244' x1='4.22647' y1='12.4062' x2='20.2088' y2='13.803' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23DA4453'/%3E%3Cstop offset='0.9998' stop-color='%2389216B'/%3E%3Cstop offset='0.9999' stop-color='%23C4C3C3' stop-opacity='0.0104167'/%3E%3Cstop offset='1' stop-color='%23C4C4C4' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"/>

                      </a>


                      <img className={newreleasesStyle.heart} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642704099/Frame_64_3_beod6f.png"/>

                  </div>
              </div>


              <div className={newreleasesStyle.singleCardLast}>

                  <img className={newreleasesStyle.cardImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642709977/Rectangle_384_4_zwlphe.png"/>

                  <h3 className={newreleasesStyle.cardHeader}>
                      Bored #0
                  </h3>
                  <div className={newreleasesStyle.links}>
                      <a className={newreleasesStyle.cardLink}>
                          <span className={newreleasesStyle.buyTheApe}>Buy The Ape </span>


                          <img className={newreleasesStyle.cardArrow} src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.43 5.92999L20.5 12L14.43 18.07' stroke='url(%23paint0_linear_1_244)' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.5 12H20.33' stroke='url(%23paint1_linear_1_244)' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_244' x1='14.692' y1='10.8619' x2='20.5003' y2='10.8769' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23DA4453'/%3E%3Cstop offset='0.9998' stop-color='%2389216B'/%3E%3Cstop offset='0.9999' stop-color='%23C4C3C3' stop-opacity='0.0104167'/%3E%3Cstop offset='1' stop-color='%23C4C4C4' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_244' x1='4.22647' y1='12.4062' x2='20.2088' y2='13.803' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23DA4453'/%3E%3Cstop offset='0.9998' stop-color='%2389216B'/%3E%3Cstop offset='0.9999' stop-color='%23C4C3C3' stop-opacity='0.0104167'/%3E%3Cstop offset='1' stop-color='%23C4C4C4' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3Cstop offset='1' stop-color='%2389216B'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"/>

                      </a>



                  </div>
              </div>

          </div>







      </div>
  </div>
    )
}
