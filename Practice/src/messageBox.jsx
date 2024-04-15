function Message({userName,textColor}){


    let style = {color:textColor};
    return(

        <h1 style={style}>Hello to, {userName}</h1>
    )
}

export default Message;