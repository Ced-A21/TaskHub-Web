import styles from "../App.module.css"
import logo from "../images/logo.png"
// import "../App.css"
function NavBar() {
    return(
       <header className={styles.navBarBase}>
        <div className={styles.logoPosition}>
            <img src={logo} alt="taskhub logo" />
        </div>
        <nav>
            <ul className={styles.NavBarList1}>
                <li>
                    Product
                    <svg className={styles.downArrowNav} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12.5L6.46417 8.96499L7.64334 7.78665L10 10.1433L12.3567 7.78665L13.5358 8.96499L10 12.5008V12.5Z" fill="white"/>
                    </svg>
                </li>
                <li>
                    Download
                    <svg className={styles.downArrowNav} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12.5L6.46417 8.96499L7.64334 7.78665L10 10.1433L12.3567 7.78665L13.5358 8.96499L10 12.5008V12.5Z" fill="white"/>
                    </svg>
                </li>
                <li>
                    Solutions
                    <svg className={styles.downArrowNav} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12.5L6.46417 8.96499L7.64334 7.78665L10 10.1433L12.3567 7.78665L13.5358 8.96499L10 12.5008V12.5Z" fill="white"/>
                    </svg>
                </li>
                <li>
                    Resources
                    <svg className={styles.downArrowNav} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12.5L6.46417 8.96499L7.64334 7.78665L10 10.1433L12.3567 7.78665L13.5358 8.96499L10 12.5008V12.5Z" fill="white"/>
                    </svg>
                </li>
                <li>
                    Pricing
                </li>
            </ul>
            <ul className={styles.NavBarList2}>        
                <li>
                    Request a demo
                </li>
                <li>
                    Log In
                </li>
                <button>

                </button>
            </ul>
        </nav>
       </header>
    )
};

export default NavBar ;