import styles from "../App.module.css"

function Questions(){
    return(
        <section className={styles.FAQsection}>
            <div className={styles.FAQHeaders}>
                <h2>
                    Question & Answers
                </h2>
                <h1>
                    Frequently Asked<br/>
                    Questions
                </h1>
                <h2 style={{fontSize:32, fontFamily:'Poppins', marginTop:36}}>
                    Don't get answer
                </h2>
                <p>
                    We will answer you in less then 24<br/>hours
                </p>
                <a href="#" className={styles.FAQLink}>
                    Leave us a Message 
                    <span style={{marginTop:7, marginLeft:3}} className={styles.FAQLink}>
                        <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_52_230)">
                        <path d="M15.6102 3.21019C15.8728 2.94773 16.2288 2.80029 16.6 2.80029C16.9712 2.80029 17.3273 2.94773 17.5898 3.21019L23.8898 9.51019C24.1523 9.77273 24.2997 10.1288 24.2997 10.5C24.2997 10.8712 24.1523 11.2273 23.8898 11.4898L17.5898 17.7898C17.3258 18.0448 16.9721 18.1859 16.6051 18.1827C16.238 18.1795 15.8868 18.0323 15.6273 17.7727C15.3677 17.5132 15.2205 17.162 15.2173 16.795C15.2141 16.4279 15.3552 16.0742 15.6102 15.8102L19.4 11.9H6.10001C5.72871 11.9 5.37261 11.7525 5.11006 11.4899C4.84751 11.2274 4.70001 10.8713 4.70001 10.5C4.70001 10.1287 4.84751 9.7726 5.11006 9.51004C5.37261 9.24749 5.72871 9.09999 6.10001 9.09999H19.4L15.6102 5.18979C15.3478 4.92726 15.2003 4.57122 15.2003 4.19999C15.2003 3.82876 15.3478 3.47273 15.6102 3.21019Z" fill="#4285F4"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_52_230" x="0" y="0" width="29" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_52_230"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_52_230" result="shape"/>
                        </filter>
                        </defs>
                        </svg>
                    </span>
                    </a>
                <div className={styles.FeatureBoxLayout} style={{width:59, height:54, borderRadius:5, backgroundColor:'#EE0011', marginLeft:0, marginTop:5, cursor:"pointer"}}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.6667 7.00002C25.6667 5.71669 24.6167 4.66669 23.3334 4.66669H4.66671C3.38337 4.66669 2.33337 5.71669 2.33337 7.00002V21C2.33337 22.2834 3.38337 23.3334 4.66671 23.3334H23.3334C24.6167 23.3334 25.6667 22.2834 25.6667 21V7.00002ZM23.3334 7.00002L14 12.8334L4.66671 7.00002H23.3334ZM23.3334 21H4.66671V9.33335L14 15.1667L23.3334 9.33335V21Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <div className={styles.ClickableFAQ}>
                <div className={styles.FAQbtn}> 
                    <button className={styles.FAQCollapsible}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.75 16.2476H16.25V23.7476H13.75V16.2476H6.25V13.7476H13.75V6.24756H16.25V13.7476H23.75V16.2476Z" fill="#ECB22E"/>
                        </svg>
                    </button>
                    <p style={{fontSize:24, fontFamily:'Poppins', fontWeight:'bold', marginLeft:44}}>
                        What is TaskHub
                    </p>
                </div>
                <div className={styles.OpenedClickable}>
                    <div style={{display:'flex', flexDirection:'row',marginTop:26}}>
                        <button className={styles.FAQCollapsible}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.75 16.2476H6.25V13.7476H23.75V16.2476Z" fill="#ECB22E"/>
                            </svg>

                        </button>
                        <p style={{fontSize:24, fontFamily:'Poppins', fontWeight:'bold', marginLeft:44}}>
                            What is TaskHub
                        </p>
                    </div>
                    <div className={styles.FAQOpenedHeader}>
                        <p>
                        The point of using Lorem Ipsum is that it has a more-or-less<br/>
                        normal distribution of letters, as opposed to using 'Content<br/>
                        here, content here', making it look like readable English. 
                        </p>
                    </div>
    
                </div>
                <div className={styles.FAQbtn}>
                    <button className={styles.FAQCollapsible}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.75 16.2476H16.25V23.7476H13.75V16.2476H6.25V13.7476H13.75V6.24756H16.25V13.7476H23.75V16.2476Z" fill="#ECB22E"/>
                        </svg>
                    </button>
                    <p style={{fontSize:24, fontFamily:'Poppins', fontWeight:'bold', marginLeft:44}}>
                        What is TaskHub
                    </p>
                </div>
                <div className={styles.FAQbtn}>
                    <button className={styles.FAQCollapsible}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.75 16.2476H16.25V23.7476H13.75V16.2476H6.25V13.7476H13.75V6.24756H16.25V13.7476H23.75V16.2476Z" fill="#ECB22E"/>
                        </svg>
                    </button>
                    <p style={{fontSize:24, fontFamily:'Poppins', fontWeight:'bold', marginLeft:44}}>
                        What is TaskHub
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Questions;