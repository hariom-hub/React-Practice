import { useState } from "react";

export default function CheckLiked() {

    let heartColor = {color:"red"};
    let [ isLiked, setIsLiked ] = useState(false);

    let toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (

        <div className="container">
            <p onClick={toggleLike} >
                {isLiked.toString()}

                {
                    isLiked ? (<i className="fa-solid fa-heart" style={heartColor}></i>) : (<i class="fa-regular fa-heart"></i>)
                }
            </p>
        </div>
    );

}