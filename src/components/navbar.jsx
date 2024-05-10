import styles from "../App.module.css"
import logo from "../images/logo.png"
// import "../App.css"
function NavBar() {
    const showSideBar = () => { // Corrected function name and syntax
        const sidebar = document.querySelector('.'+styles.sidebar); // Corrected selector
        sidebar.style.display = 'flex';
    };

    const hideSideBar = () => {
        const sidebar = document.querySelector('.'+styles.sidebar); // Corrected selector
        sidebar.style.display = 'none';
    }
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
                <button className={styles.getTaskHubBtn}>
                    Get Taskhub Free
                </button>
            </ul>
            <li className={styles.burgerbutton}onClick={showSideBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </li>
            <ul className={styles.sidebar}>
                <li onClick={hideSideBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </li>
                <li>
                    Product
                </li>
                <li>
                    Download
                </li>
                <li>
                    Solutions
                </li>
                <li>
                    Resources
                </li>
                <li>
                    Pricing
                </li>
                <li>
                    Request a Demo
                </li>
                <li>
                    Log in
                </li>
        
            </ul>
        </nav>
       </header>
    )
};



export default NavBar ;