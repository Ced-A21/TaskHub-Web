import styles from "../App.module.css"
import Doordash from "../images/Doordash.png"
import headspace from "../images/headspace.png"
import airbnb from "../images/airbnb.png"
import etsy from "../images/Etsy.png"
import pixar from "../images/Pixar.png"
import uber from "../images/uber.png"

const Company = () => {
    return(
        <section className={styles.CompanySection}>
            <div className={styles.CompanyH2}>
                <h2>
                    TRUSTED BY COMPANIES ALL OVER THE WORLD
                </h2>
            </div>
            <div className={styles.CompanyLogos}>
                <div className={styles.CompanyImgs}>
                    <img src={Doordash} alt=""/>
                </div>
                <div className={styles.CompanyImgs}>
                    <img src={headspace} alt=""/>
                </div>
                <div className={styles.CompanyImgs}>
                    <img src={airbnb} alt=""/>
                </div>
                <div className={styles.CompanyImgs}>
                    <img src={etsy} alt=""/>
                </div>
                <div className={styles.CompanyImgs}>
                    <img src={pixar} alt=""/>
                </div>
                <div className={styles.CompanyImgs}>
                    <img src={uber} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Company;