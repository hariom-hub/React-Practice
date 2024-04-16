import { useState } from "react";

export default function CheckLiked() {

    let [clicks,newClicks] = useState(0);


    let heartColor = {color:"red"};
    let [ isLiked, setIsLiked ] = useState(false);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        newClicks(clicks+1);
        
    };

    return (

        <div className="container">
            <h4>Number of clicks : {clicks}  </h4>
            <p onClick={toggleLike} >
                {/* {isLiked.toString()} */}

                {
                    isLiked ? (<i className="fa-solid fa-heart" style={heartColor}></i>) : (<i class="fa-regular fa-heart"></i>)
                }
            </p>
        </div>
    );

}