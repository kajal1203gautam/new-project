
import '../contact.css'
export default function Contact(){
    const styles={
        h2:{
            textTransform:'upperCase'
        }
    }
    return(
        <>
        <p style={{fontSize:"20px",color:'blue',textTransform:'upperCase'}}>this is contact page</p>
        <h2 style={styles.h2}>Hello World</h2>
        </>
    )
}