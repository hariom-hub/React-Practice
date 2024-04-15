function Message({ userName, textColor }) {


    let style = { color: textColor };
    return (

        <div className="container">
            <h1 style={style} id="head">Hello to, {userName}</h1>
            <button>Click to change color</button>
        </div>

    )
}

export default Message;