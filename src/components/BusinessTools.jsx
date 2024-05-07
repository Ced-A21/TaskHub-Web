import styles from "../App.module.css"
import BizLogo from "../images/BizTool.png"

const BizTool = () => {
    return(
        <section className={styles.BizTools}>
            <div className={styles.BizToolLogo} style={{marginBottom:56}}>
                <img src={BizLogo} alt="Business Tool"/>
            </div>
            <div style={{backgroundColor:'white', marginLeft:42}}>
                <h3 style={{color:'#ECB22E', fontFamily:'Poppins', fontSize:20}}>
                    Business Tools
                </h3>
                <h1 style={{color:'black', fontSize:44, fontFamily:'Poppins'}}>
                    Useful Features
                </h1>
                <h2 style={{color:'#773977', fontSize:28}}>
                    Team Management
                </h2>
                <p style={{color:'#646464', fontFamily:'Poppins', marginTop:13}}>
                    The point of using Lorem Ipsum is that it has a more-or-<br/>
                    less normal distribution of letters, as opposed to using<br/>
                    'Content here, content here', making it look like readable<br/>
                    English.
                </p>
                <ul style={{display:'flex', flexDirection:"column", marginTop:14}}>
                    <li style={{fontFamily:'Poppins', fontSize:18, color:'#646464', padding:0}}>
                        <span style={{justifyContent:'center', alignItems:"center", marginRight:7, marginTop:2}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#2EB67D"/>
                            </svg>
                        </span>
                        99% Survey Report
                    </li>
                    <li style={{fontFamily:'Poppins', fontSize:18, color:'#646464', padding:0}}>
                        <span style={{justifyContent:'center', alignItems:"center", marginRight:7, marginTop:2}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#2EB67D"/>
                            </svg>
                        </span>
                        Trusted By Teams
                    </li>
                    <li style={{fontFamily:'Poppins', fontSize:18, color:'#646464', padding:0}}>
                        <span style={{justifyContent:'center', alignItems:"center", marginRight:7, marginTop:2}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#2EB67D"/>
                            </svg>
                        </span>
                        Self-Services
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default BizTool;