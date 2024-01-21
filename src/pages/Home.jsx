
import '../home.css'

export default function Home(){
    const home = {
        p:{
            color:'red',
            fontSize:'40px',
            textTransform:'upperCase'
        },
        h6:{
            color:'blue',
            border:'2px solid black',
            textTransform:'upperCase'
        }
    }
    return (
        <>
       <p style={home.p}> this is home page</p>
       <h6 style={home.h6}>this is home page</h6>
        </>
    )
}