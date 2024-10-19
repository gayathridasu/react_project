function Child(props){

    console.log(props.data);

    var c=props.data;

    var d = c.map((val,ind)=>{
    

        return(
        <>
        <tr key={ind}>
            <td>{val["id"]}</td>
            <td>{val["title"]}</td>
            <td>{val["price"]}</td>
            <td><img src={val["image"]} alt={"img"} width={100}/></td>
            <td>{val["rating"]["rate"]}</td>
            <td>{val["rating"]["count"]}</td>
    
        </tr>
        
        </>
        
        )
    });
    


    return(

        <>
         <h1>hello</h1>
        
         {console.log((d))}
        
        <ul>{d}</ul> 
        </>
    )
}

export default Child;