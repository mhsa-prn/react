function eventHandler(e){
    console.log(e)
}

function Event(){
    return(
        <button onClick={eventHandler}>button</button>
    )
}

export default Event