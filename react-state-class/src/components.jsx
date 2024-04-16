import { useState } from "react";
export default function Count() {

    let [count,setCount]  = useState(0);

    function incCount() {
        setCount(count+1);
        console.log(count);
    }
    return (
        <div className="container">
            <h2>Click button to increase count</h2>
            <button onClick={incCount}>Click </button>
            <h3>Count is : {count}</h3>
        </div>
    )

}