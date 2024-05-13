import styles from "../App.module.css"

function Testimonials(){
    return(
        <section className={styles.TestimonialSect}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} className={styles.TestimonialHeader}>
                <p>
                    Testimonials
                </p>
                <h1 style={{color:'black'}}>
                    What our Client Says 
                </h1>
            </div>
            <div className={styles.ClientHeader}>
                <div className={styles.TestimonialConts}>
                    <div className={styles.pic1} style={{position:'relative'}}>
                        
                    </div>
                    <div className={styles.TestimonialDesc} style={{display:'flex', justifyContent:"center", flexDirection:'column', alignItems:'center'}}>
                        <h2 style={{fontSize:28}}>
                            John Scott
                        </h2>
                        <h2 style={{color:'#ECB22E', fontSize:'24'}}>
                            CEO
                        </h2>
                        <p style={{textAlign:"center"}}>
                            The point of using Lorem Ipsum is that it has a<br/>
                            more-or-less noraml distribution of letters, as<br/>
                            opposed to using 'Content here, content here',<br/>
                            making it look like readable English. The point of<br/>
                            using Lorem Ipsum is that it has more-or-less<br/>
                            normal distribution of letter, as opposed to<br/>
                            using 'Content here, content here', making it<br/>
                            look like readable English.
                        </p>
                    </div>
                </div>
                <div className={styles.TestimonialConts}>
                    <div className={styles.pic2}>

                    </div>
                    <div className={styles.TestimonialDesc} style={{display:'flex', justifyContent:"center", flexDirection:'column', alignItems:'center'}}>
                        <h2 style={{fontSize:28}}>
                            Charles Edward
                        </h2>
                        <h2 style={{color:'#ECB22E', fontSize:'24'}}>
                            CEO
                        </h2>
                        <p style={{textAlign:'center'}}>
                            The point of using Lorem Ipsum is that it has a<br/>
                            more-or-less noraml distribution of letters, as<br/>
                            opposed to using 'Content here, content here',<br/>
                            making it look like readable English. The point of<br/>
                            using Lorem Ipsum is that it has more-or-less<br/>
                            normal distribution of letter, as opposed to<br/>
                            using 'Content here, content here', making it<br/>
                            look like readable English.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;