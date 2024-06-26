import { useState } from "react";

export default function CheckLiked() {

    let [clicks, newClicks] = useState(0);


    let heartColor = { color: "red" };
    let [isLiked, setIsLiked] = useState(false);
    let [isLike, checkLike] = useState(false);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        checkLike(!isLike);
        newClicks(clicks + 1);
        console.log(clicks);

    };

    return (

        <div className="container">
            {/* <h4>Number of clicks : {clicks}  </h4> */}
            <p onClick={toggleLike} >
                {/* {isLiked.toString()} */}

                {
                    isLiked ? (<i className="fa-solid fa-heart" style={heartColor}></i>) : (<i class="fa-regular fa-heart"></i>)
                }
            </p>
            
            <p>Emotion : {
                isLike ? ("she loves you ") : "she doesn't loves you"
            }</p>
            <h4>count = {clicks}</h4>
        </div>
    );

}