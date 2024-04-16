export default function Event(){

    return(

        <button onClick={showEvent}>click</button>
    )
}
function showEvent(event){

    console.log(event);
}
