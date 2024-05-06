import styles from "../App.module.css"
import HeroPic from "../images/HeroImage.png"
import Googol from "../images/devicon_google.png"
const Hero = () => {
    return(
        <section className={styles.HeroSection}>
            <div className={styles.HeroHeader}>
                <h1>
                    Made for people. <br/>
                    <span className={styles.h1Desc}>Built for productivity.</span>
                </h1>
                <p className={styles.HeroP}>
                The point of using Lorem Ipsum is that it has a more-or-less normal<br/>
                distribution of letters, as opposed to using 'Content here, content<br/> here', making it look like readable English. 
                </p>
                <div className={styles.HeroBtns}>
                    <button className={styles.HeroBtn1}>
                        SIGN UP WITH EMAIL
                    </button>
                    <button className={styles.GoogleBtn}>
                        <img className={styles.GoogolImg} src={Googol} alt="google logo"/><span>SIGN UP WITH GOOGLE</span>
                    </button>
                </div>
                <p style={{color: 'white', fontFamily:'Poppins', fontSize:15, marginTop: 21}}>
                    Taskhub is free to try for a long as you’d like.
                </p>
            </div>
            <div className={styles.HeroPicture}>
                <img src={HeroPic} alt="Hero Logo"/>
            </div>
        </section>
    )
}

export default Hero;