import styles from "../App.module.css"
import THub from "../images/Group.png"

function FooteR(){
    return(
        <footer className={styles.FooterLayout}>
            <div className={styles.FooterContent}>
                <div style={{display:'flex', flexDirection:'column', marginRight:61}}>
                    <div>
                        <img src={THub} alt="Taskhub logo" />
                    </div>
                    <p style={{fontFamily:'Poppins', color:'#646464', fontSize:18, marginTop:16}}>
                        The point of using Lorem Ipsum is that it has more-or-less<br/>
                        normal distribution of letters, as opposed to using 'Content<br/>
                        here, content here', making it look like readable English.
                    </p>
                    <ul style={{display:'flex', flexDirection:'row'}}>
                        <li className={styles.footerLinks}>
                            <a href="https://facebook.com/">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_53_59)">
                            <path d="M48 24C48 10.7452 37.2547 0 24 0C10.7452 0 0 10.7451 0 24C0 35.979 8.7765 45.9081 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3151 9.375C31.941 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.6796 15.75 27.75 17.6001 27.75 19.4981V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2235 45.9081 48 35.9792 48 24Z" fill="#1877F2"/>
                            <path d="M33.3422 30.9375L34.4062 24H27.75V19.4981C27.75 17.5999 28.6798 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.941 9.375 29.3151 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C21.4905 47.9028 22.7443 48.0003 24 48C25.2557 48.0004 26.5095 47.9029 27.75 47.7084V30.9375H33.3422Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_53_59">
                            <rect width="48" height="48" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </a>
                        </li>
                        <li className={styles.footerLinks}>
                            <a href="https://twitter.com/">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_53_62)">
                                <path d="M24 0C37.2686 0 48 10.7314 48 24C48 37.2686 37.2686 48 24 48C10.7314 48 0 37.2686 0 24C0 10.7314 10.7314 0 24 0ZM19.6114 36.6514C30.24 36.6514 36.0686 27.84 36.0686 20.1943V19.44C37.2 18.6171 38.1943 17.5886 38.9486 16.4229C37.92 16.8686 36.7886 17.1771 35.6229 17.3486C36.8229 16.6286 37.7486 15.4971 38.16 14.16C37.0286 14.8114 35.7943 15.2914 34.4914 15.5657C33.4286 14.4343 31.92 13.7486 30.2743 13.7486C27.0857 13.7486 24.48 16.3543 24.48 19.5429C24.48 19.9886 24.5143 20.4343 24.6514 20.8457C19.8514 20.6057 15.5657 18.3086 12.72 14.8114C12.24 15.6686 11.9314 16.6629 11.9314 17.7257C11.9314 19.7143 12.96 21.4971 14.5029 22.5257C13.5429 22.5257 12.6514 22.2514 11.8971 21.8057V21.8743C11.8971 24.6857 13.8857 27.0171 16.5257 27.5657C16.0457 27.7029 15.5314 27.7714 15.0171 27.7714C14.64 27.7714 14.2971 27.7371 13.92 27.6686C14.64 29.9657 16.8 31.6457 19.3029 31.68C17.3143 33.2229 14.8114 34.1486 12.1029 34.1486C11.6229 34.1486 11.1771 34.1486 10.7314 34.08C13.2686 35.7257 16.32 36.6857 19.5771 36.6857" fill="#17A1FA"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_53_62">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </a>
                        </li>
                        <li className={styles.footerLinks}>
                            <a href="https://www.instagram.com/">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_53_64)">
                                <path d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z" fill="url(#paint0_radial_53_64)"/>
                                <path d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z" fill="url(#paint1_radial_53_64)"/>
                                <path d="M24.0017 5.25C18.9096 5.25 18.2704 5.27231 16.2705 5.36325C14.2744 5.45475 12.9118 5.77069 11.7197 6.23438C10.4863 6.71325 9.44025 7.35394 8.39813 8.39644C7.35506 9.43875 6.71438 10.4848 6.234 11.7176C5.769 12.9101 5.45269 14.2732 5.36287 16.2684C5.27344 18.2685 5.25 18.9079 5.25 24.0002C5.25 29.0925 5.2725 29.7296 5.36325 31.7295C5.45513 33.7256 5.77106 35.0882 6.23438 36.2803C6.71362 37.5137 7.35431 38.5597 8.39681 39.6019C9.43875 40.6449 10.4848 41.2871 11.7172 41.766C12.9103 42.2297 14.2731 42.5456 16.2688 42.6371C18.2689 42.7281 18.9075 42.7504 23.9994 42.7504C29.0921 42.7504 29.7292 42.7281 31.7291 42.6371C33.7253 42.5456 35.0893 42.2297 36.2824 41.766C37.5152 41.2871 38.5597 40.6449 39.6015 39.6019C40.6446 38.5597 41.2851 37.5137 41.7656 36.2809C42.2265 35.0882 42.543 33.7253 42.6367 31.7299C42.7266 29.73 42.75 29.0925 42.75 24.0002C42.75 18.9079 42.7266 18.2689 42.6367 16.2688C42.543 14.2727 42.2265 12.9103 41.7656 11.7182C41.2851 10.4848 40.6446 9.43875 39.6015 8.39644C38.5586 7.35356 37.5156 6.71287 36.2812 6.23456C35.0859 5.77069 33.7226 5.45456 31.7265 5.36325C29.7264 5.27231 29.0897 5.25 23.9959 5.25H24.0017ZM22.3196 8.62894C22.8189 8.62819 23.376 8.62894 24.0017 8.62894C29.0081 8.62894 29.6014 8.64694 31.5784 8.73675C33.4065 8.82038 34.3988 9.12581 35.0597 9.3825C35.9347 9.72225 36.5586 10.1286 37.2144 10.785C37.8707 11.4412 38.2768 12.0662 38.6175 12.9412C38.8742 13.6012 39.18 14.5935 39.2633 16.4216C39.3531 18.3983 39.3726 18.9919 39.3726 23.9959C39.3726 28.9999 39.3531 29.5937 39.2633 31.5701C39.1796 33.3982 38.8742 34.3905 38.6175 35.0507C38.2778 35.9257 37.8707 36.5488 37.2144 37.2047C36.5582 37.8609 35.9351 38.2671 35.0597 38.607C34.3995 38.8648 33.4065 39.1695 31.5784 39.2531C29.6017 39.3429 29.0081 39.3624 24.0017 39.3624C18.9951 39.3624 18.4016 39.3429 16.4252 39.2531C14.5971 39.1688 13.6048 38.8633 12.9433 38.6066C12.0684 38.2667 11.4433 37.8606 10.7871 37.2043C10.1308 36.5481 9.72469 35.9246 9.384 35.0492C9.12731 34.389 8.8215 33.3967 8.73825 31.5686C8.64844 29.592 8.63044 28.9984 8.63044 23.9912C8.63044 18.9842 8.64844 18.3936 8.73825 16.4169C8.82188 14.5888 9.12731 13.5966 9.384 12.9356C9.72394 12.0606 10.1308 11.4356 10.7873 10.7794C11.4435 10.1231 12.0684 9.71681 12.9435 9.37631C13.6044 9.1185 14.5971 8.81381 16.4252 8.72981C18.1549 8.65162 18.8252 8.62819 22.3196 8.62425V8.62894ZM34.0104 11.7422C32.7683 11.7422 31.7604 12.7491 31.7604 13.9914C31.7604 15.2336 32.7683 16.2414 34.0104 16.2414C35.2526 16.2414 36.2604 15.2336 36.2604 13.9914C36.2604 12.7493 35.2526 11.7414 34.0104 11.7414V11.7422ZM24.0017 14.3711C18.6842 14.3711 14.3728 18.6825 14.3728 24.0002C14.3728 29.3179 18.6842 33.6272 24.0017 33.6272C29.3194 33.6272 33.6292 29.3179 33.6292 24.0002C33.6292 18.6827 29.319 14.3711 24.0013 14.3711H24.0017ZM24.0017 17.7501C27.4534 17.7501 30.2518 20.5481 30.2518 24.0002C30.2518 27.4519 27.4534 30.2503 24.0017 30.2503C20.5498 30.2503 17.7518 27.4519 17.7518 24.0002C17.7518 20.5481 20.5498 17.7501 24.0017 17.7501Z" fill="white"/>
                                </g>
                                <defs>
                                <radialGradient id="paint0_radial_53_64" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.75 51.6969) rotate(-90) scale(47.5716 44.2453)">
                                <stop stop-color="#FFDD55"/>
                                <stop offset="0.1" stop-color="#FFDD55"/>
                                <stop offset="0.5" stop-color="#FF543E"/>
                                <stop offset="1" stop-color="#C837AB"/>
                                </radialGradient>
                                <radialGradient id="paint1_radial_53_64" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-8.04019 3.45769) rotate(78.681) scale(21.2648 87.654)">
                                <stop stop-color="#3771C8"/>
                                <stop offset="0.128" stop-color="#3771C8"/>
                                <stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
                                </radialGradient>
                                <clipPath id="clip0_53_64">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </a>              
                        </li>
                        <li className={styles.footerLinks}>
                            <a href="https://www.whatsapp.com/">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_53_69)">
                                <path d="M1.0243 23.7126C1.02318 27.7455 2.08518 31.6834 4.10455 35.1543L0.831177 47.0132L13.0622 43.8311C16.4451 45.6585 20.2354 46.616 24.0872 46.6162H24.0973C36.8126 46.6162 47.1632 36.3496 47.1686 23.7306C47.1711 17.6158 44.7733 11.8659 40.4169 7.53994C36.0613 3.21436 30.2685 0.830916 24.0964 0.828125C11.3796 0.828125 1.02974 11.0942 1.02449 23.7126" fill="url(#paint0_linear_53_69)"/>
                                <path d="M0.200625 23.7053C0.199313 27.8834 1.29937 31.962 3.39075 35.5572L0 47.8413L12.6696 44.5451C16.1604 46.4337 20.0908 47.4294 24.0902 47.4309H24.1005C37.272 47.4309 47.9944 36.795 48 23.7243C48.0023 17.3898 45.5182 11.4331 41.0062 6.95219C36.4937 2.47181 30.4937 0.00260465 24.1005 0C10.9267 0 0.205875 10.6344 0.200625 23.7053ZM7.74563 34.938L7.27256 34.1929C5.28394 31.0554 4.23431 27.4298 4.23581 23.7068C4.24012 12.8426 13.1509 4.00372 24.108 4.00372C29.4143 4.00595 34.401 6.05842 38.1517 9.78233C41.9023 13.5066 43.9661 18.4573 43.9648 23.7228C43.9599 34.587 35.049 43.427 24.1005 43.427H24.0926C20.5277 43.4251 17.0314 42.4752 13.9823 40.68L13.2566 40.253L5.73825 42.2089L7.74563 34.9379V34.938Z" fill="url(#paint1_linear_53_69)"/>
                                <path d="M18.1271 13.7949C17.6797 12.8083 17.2089 12.7884 16.7835 12.7711C16.4351 12.7562 16.0369 12.7573 15.639 12.7573C15.2407 12.7573 14.5937 12.906 14.0467 13.4986C13.4992 14.0917 11.9565 15.525 11.9565 18.4401C11.9565 21.3555 14.0964 24.1728 14.3947 24.5685C14.6934 24.9635 18.5259 31.1372 24.5957 33.5123C29.6402 35.4861 30.6667 35.0935 31.7615 34.9946C32.8565 34.8959 35.2948 33.5616 35.7922 32.178C36.29 30.7946 36.29 29.6087 36.1408 29.3609C35.9915 29.114 35.5933 28.9657 34.9961 28.6695C34.3987 28.3732 31.4629 26.9397 30.9155 26.7419C30.368 26.5443 29.97 26.4457 29.5717 27.039C29.1735 27.6314 28.0299 28.9657 27.6814 29.3609C27.3332 29.757 26.9846 29.8063 26.3876 29.5099C25.79 29.2126 23.8669 28.5877 21.5852 26.5692C19.8099 24.9986 18.6114 23.0591 18.263 22.4658C17.9147 21.8734 18.2257 21.5523 18.5252 21.2571C18.7935 20.9916 19.1225 20.5652 19.4214 20.2193C19.7192 19.8733 19.8185 19.6264 20.0177 19.2312C20.217 18.8357 20.1172 18.4896 19.9682 18.1933C19.8185 17.8969 18.6581 14.9665 18.1271 13.7949Z" fill="white"/>
                                </g>
                                <defs>
                                <linearGradient id="paint0_linear_53_69" x1="2317.7" y1="4619.34" x2="2317.7" y2="0.828125" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1FAF38"/>
                                <stop offset="1" stop-color="#60D669"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_53_69" x1="2400" y1="4784.13" x2="2400" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F9F9F9"/>
                                <stop offset="1" stop-color="white"/>
                                </linearGradient>
                                <clipPath id="clip0_53_69">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div style={{display:'flex', flexDirection:'column', marginBottom:35}}>
                    <div style={{display:'flex', flexDirection:'column', marginBottom:19}}>
                        <h2>
                            About Taskhub
                        </h2>
                        <a href="#" style={{textDecoration:'none'}}>
                            <p style={{fontSize:18, color:'#646464', marginTop:10}}>
                                What's behind the boards
                            </p>
                        </a>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', marginBottom:19}}>
                        <h2>
                            Jobs
                        </h2>
                        <a  href="#" style={{textDecoration:'none'}}>
                            <p style={{fontSize:18, color:'#646464', marginTop:10}}>
                                Learn about open roles<br/>
                                on the Taskhub team
                            </p>
                        </a>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column',marginLeft:71, marginTop:12}}>
                    <div style={{display:'flex', flexDirection:'column', marginBottom:19}}>
                        <h2>
                            Apps
                        </h2>
                        <a href="#" style={{textDecoration:'none'}}>     
                            <p style={{fontSize:18, color:'#646464', marginTop:10}}>
                                Download the Taskhub app for<br/>your desktop or mobile<br/>devices.
                            </p>
                        </a>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', marginBottom:19}}>
                        <h2>
                            Contact Us
                        </h2>
                        <a href="#" style={{textDecoration:'none'}}>
                            <p style={{fontSize:18, color:'#646464', marginTop:10}}>
                                Need anything? Get in<br/>
                                touch and we can help.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </footer>
    )
}

export default FooteR;