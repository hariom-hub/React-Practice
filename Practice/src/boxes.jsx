import "./boxes.css";
function Boxes({ title,list1,list2, oldPrice, newPrice }) {

    return (

        <div className="box">
            <h4>{title}</h4>
            <li>{list1}</li>
            <li>{list2}</li>
            <span><strike>{oldPrice}</strike></span>&nbsp;
            <span><b>{newPrice}</b></span>
        </div>
    )
}

export default Boxes;