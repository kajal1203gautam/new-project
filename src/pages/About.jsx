import { useParams } from "react-router-dom"


export default function About() {
    const { id, userId } = useParams();

    const styles = {
        card: {
            color: "red",
            border: "1px solid red"
        },
        cardBody:{
padding:"2px",

        }
    }


    return (
        <>
            <p style={{ color: "white", fontSize: '30px', backgroundColor: 'blue' }}>This is about page</p>
            <p style={styles.card}>this is inline css </p>
        </>
    )
}
