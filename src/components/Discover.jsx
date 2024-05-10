import styles from "../App.module.css"

const Discovery = () => {
    return (
        <section className={styles.DiscoverLayout}>
                <div >
                    <h1 style={{display:'flex', textAlign:'center', marginBottom:69}}>Discover what you can achieve<br/> with TaskHub.</h1>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <button className={styles.TryForFree}>
                        Try For Free
                    </button>
                    <button className={styles.TalkToSales}>
                        Talk To Sales
                    </button>
                </div>
        </section>
    )
}

export default Discovery;