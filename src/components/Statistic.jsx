import styles from "../App.module.css"

function Numbers(){
    return (
        <section className={styles.statistics}>
            <div className={styles.statisticLayout}>
                <h1 style={{color:'#773977', fontSize:48}}>
                    200
                </h1>
                <h2>
                    Countries Worldwide
                </h2>
            </div>
            <div className={styles.statisticLayout}>
                <h1 style={{color:'#773977', fontSize:48}}>
                    156k
                </h1>
                <h2>
                    Registered Users
                </h2>
            </div>
            <div className={styles.statisticLayout}>
                <h1 style={{color:'#773977', fontSize:48}}>
                    23k
                </h1>
                <h2>
                    Small & Big Companies
                </h2>
            </div>
        </section>
    )
}

export default Numbers;