import Prop_Third from "./third";

var Prop_second = (props)=>{

    console.log(props, "second");

    
    

    return (

        <>
        <h1>Hello this is child </h1>

        <Prop_Third c={props}/>
        </>
    )
}

export default Prop_second;