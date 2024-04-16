let list = document.createElement('li');
let body = document.querySelector('body');

export default function CreateElement() {

    return (
        <div className="container">
            <button onClick={() => {
                list.innerText = "hariom";
                body.append(list);
            }}>Create</button>
            <button onClick={RemoveElement}>Remove</button>
        </div>
    )
}

function RemoveElement() {

    return (

        <div className="box">
            {

            }
        </div>
    )
}