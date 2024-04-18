import { useState } from "react"
export default function LudoBox() {

    let [moves, setMoves] = useState({ blue: 0 }, { green: 0 }, { yellow: 0 }, { red: 0 })
    let [arr, setArr] = useState([moves.blue]);

    let incMoves = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 };
        })

        arr.push(`blue moves = ${moves.blue}`)
        setArr((prevArr)=>{return[...prevArr,"blue moves"]});
        console.log(arr);
    };


    return (
        <div className="container">

            <p>Blue box moves = {moves.blue}</p>
            <p>{arr}</p>
            <button style={{ backgroundColor: 'blue' }} onClick={incMoves}>Moves = {moves.blue}</button>
            <p>Green box moves = </p>
            <button style={{ backgroundColor: 'Green' }}>Moves = </button>
            <p>Yellow box moves = </p>
            <button style={{ backgroundColor: 'Yellow', color: "black" }}>Moves = </button>
            <p>Red box moves = </p>
            <button style={{ backgroundColor: 'red' }}>Moves = </button>
        </div>
    )
}