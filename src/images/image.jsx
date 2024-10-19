import a from "../images/image1.jpeg"
import b from "../images/image2.jpeg"
import c from "../images/image3.jpeg"
import d from "../images/image4.jpeg"
import e from "../images/image5.jpeg"

function Hi(){

    return(
        <>
        <h1>Images Display</h1> 

        <img src={a} />
        <img src={b} />
        <img src={c} />
        <img src={d} />
        <img src={e} />
        </>
    )
}

export default Hi;