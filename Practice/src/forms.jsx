export default function Forms() {



    return (

        <div className="form">
            <form action="submit" onSubmit={handleEventForm}>
                <input type="text" placeholder="Write Something" id="txt" />
                <button>Submit</button>
            </form>
        </div>
    )
}

function handleEventForm(event) {

    return (
        alert("form submited")
    )
}