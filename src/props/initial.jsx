import Prop_second from "./second";

var obj={
    one:10,
    two:20,
    three:30
}

var Prop_com = ( )=>{

    return (

        <>
        <h1>Hello this is parent</h1>

        <Prop_second a={obj}/>
        
        </>
    )
}

export default Prop_com;