import styles from "../App.module.css"

const Feature = () => {
    return(
        <section className={styles.FeatureSection}>
            <div className={styles.FeatureHeader}>
                <h2 className={styles.FeatureH2}>
                    Features
                </h2>
                <h1 className={styles.FeatureH1}>
                    Get Benefits
                </h1>
                <p class={styles.FeatureDesc}>
                    The point of using Lorem Ipsum is that it has a more-or-<br/>
                    less normal distribution of letters, as opposed to using<br/>
                    'Content here, content here', making it look like readable<br/>
                    English. 
                </p>
                <button className={styles.FeatureBtn}>Get Started</button>
            </div>
            <div className={styles.MarketMeetingMobileLayout}>
                <div className={styles.MarketingBox} style={{}}>
                    <div className={styles.FeatureBoxLayout} style={{width:59, height:54, borderRadius:5, backgroundColor:'#EE0011'}}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.6667 7.00002C25.6667 5.71669 24.6167 4.66669 23.3334 4.66669H4.66671C3.38337 4.66669 2.33337 5.71669 2.33337 7.00002V21C2.33337 22.2834 3.38337 23.3334 4.66671 23.3334H23.3334C24.6167 23.3334 25.6667 22.2834 25.6667 21V7.00002ZM23.3334 7.00002L14 12.8334L4.66671 7.00002H23.3334ZM23.3334 21H4.66671V9.33335L14 15.1667L23.3334 9.33335V21Z" fill="white"/>
                        </svg>
                    </div>
                    <h2 className={styles.FeatureH3} style={{marginTop:20, marginLeft:16}}>
                        Email Marketing
                    </h2>
                    <p style={{marginTop:5, marginLeft:16, fontSize:10, color:'#646464', fontFamily:'Poppins', marginBottom:10}}>
                        The point of using Lorem Ipsum is that<br/>
                        it has a more-or-less normal<br/> 
                        distribution of letters, as opposed to<br/>
                        using 'Content here, content here',<br/>
                        making it look like readable English.  

                    </p>
                </div>
                <div className={styles.VirtualMeetingBox} style={{display:'flex', flexDirection:'column'}}>
                    <div className={styles.FeatureBoxLayout} style={{width:59, height:54, borderRadius:5, backgroundColor:'#ECB22E', display:'flex'}}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5.83332V10.36L16.3333 12.6933V6.99999H19.8333V16.1933L22.1666 18.5267V4.66665H16.3333V3.49999H7.13996L9.47329 5.83332H14ZM2.81163 2.48499L1.16663 4.12999L5.83329 8.79665V22.1667H3.49996V24.5H16.3333V19.2967L23.87 26.8333L25.515 25.1883L2.81163 2.48499ZM14 22.1667H8.16663V11.13L14 16.9633V22.1667Z" fill="white"/>
                        </svg>
                    </div>
                    <h2 className={styles.FeatureH3} style={{marginTop:20, marginLeft:16}}>
                        Virtual Meeting
                    </h2>
                    <p style={{marginTop:5, marginLeft:16, fontSize:10, color:'#646464', fontFamily:'Poppins'}}>
                        The point of using Lorem Ipsum is that<br/>
                        it has a more-or-less normal<br/> 
                        distribution of letters, as opposed to<br/>
                        using 'Content here, content here',<br/>
                        making it look like readable English. 

                    </p>
                </div>
            </div>
            <div style={{marginTop:30}}>
                <div className={styles.HelpDeskBox} style={{}}>
                    <div className={styles.FeatureBoxLayout} style={{width:59, height:54, borderRadius:5, backgroundColor:'#2EB67D'}}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_47_124)">
                        <path d="M5.83337 15.75H22.1667M14 15.75V28M7.58337 12.8333V7.58331H6.21604C5.43908 7.58332 4.68421 7.84185 4.07037 8.31817C3.45654 8.79449 3.01865 9.46152 2.82571 10.2141L0.583374 18.9583V19.25H8.75004V21C8.75004 22.75 8.75004 23.9166 9.62504 25.6666C9.62504 25.6666 10.5 27.4166 11.6667 27.4166M20.4167 12.8333V7.58331H21.784C22.561 7.58332 23.3159 7.84185 23.9297 8.31817C24.5435 8.79449 24.9814 9.46152 25.1744 10.2141L27.4167 18.9583V19.25H19.25V21C19.25 22.75 19.25 23.9166 18.375 25.6666C18.375 25.6666 17.5 27.4166 16.3334 27.4166M7.40837 5.24998C7.40837 5.24998 5.54171 4.08331 5.54171 2.62498C5.54171 2.08411 5.75657 1.5654 6.13901 1.18295C6.52146 0.800504 7.04018 0.585646 7.58104 0.585646C8.12191 0.585646 8.64062 0.800504 9.02307 1.18295C9.40552 1.5654 9.62037 2.08411 9.62037 2.62498C9.62037 4.08331 7.75837 5.24998 7.75837 5.24998H7.40837ZM20.5917 5.24998C20.5917 5.24998 22.4584 4.08331 22.4584 2.62498C22.4584 2.0835 22.2433 1.56419 21.8604 1.1813C21.4775 0.798417 20.9582 0.583313 20.4167 0.583313C19.2897 0.583313 18.3797 1.49798 18.3797 2.62498C18.3797 4.08331 20.2417 5.24998 20.2417 5.24998H20.5917Z" stroke="white" stroke-width="2"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_47_124">
                        <rect width="28" height="28" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <h2 className={styles.FeatureH3} style={{marginTop:20, marginLeft:16}}>
                        IT & Help Desk
                    </h2>
                    <p style={{marginTop:5, marginLeft:16, fontSize:10, color:'#646464', fontFamily:'Poppins'}}>
                        The point of using Lorem Ipsum is that<br/>
                        it has a more-or-less normal<br/> 
                        distribution of letters, as opposed to<br/>
                        using 'Content here, content here',<br/>
                        making it look like readable English. 

                    </p>
                </div>
                <div className={styles.ManagementBox} style={{}}>
                    <div className={styles.FeatureBoxLayout} style={{width:59, height:54, borderRadius:5, backgroundColor:'#587DBD'}}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8.16669H16.3333V10.5H7V8.16669ZM7 12.8334H21V15.1667H7V12.8334ZM7 17.5H10.4883V19.8334H7V17.5Z" fill="white"/>
                        <path d="M16.3334 3.5L12.8334 0V2.33333H4.66671C4.04787 2.33333 3.45438 2.57917 3.01679 3.01675C2.57921 3.45434 2.33337 4.04783 2.33337 4.66667V23.3333C2.33337 23.9522 2.57921 24.5457 3.01679 24.9832C3.45438 25.4208 4.04787 25.6667 4.66671 25.6667H9.33337V23.3333H4.66671V4.66667H12.8334V7L16.3334 3.5ZM11.6667 24.5L15.1667 28V25.6667H23.3334C23.9522 25.6667 24.5457 25.4208 24.9833 24.9832C25.4209 24.5457 25.6667 23.9522 25.6667 23.3333V4.66667C25.6667 4.04783 25.4209 3.45434 24.9833 3.01675C24.5457 2.57917 23.9522 2.33333 23.3334 2.33333H18.6667V4.66667H23.3334V23.3333H15.1667V21L11.6667 24.5Z" fill="white"/>
                        </svg>
                    </div>
                    <h2 className={styles.FeatureH3} style={{marginTop:20, marginLeft:16}}>
                        Task Management
                    </h2>
                    <p style={{marginTop:5, marginLeft:16, fontSize:10, color:'#646464', fontFamily:'Poppins'}}>
                        The point of using Lorem Ipsum is that<br/>
                        it has a more-or-less normal<br/> 
                        distribution of letters, as opposed to<br/>
                        using 'Content here, content here',<br/>
                        making it look like readable English. 

                    </p>
                </div>  
            </div>
        </section>
    )
}

export default Feature