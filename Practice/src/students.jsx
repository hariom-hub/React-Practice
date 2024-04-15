import "./student.css";
function Student({ name, age, rollNo, hobbies }) {

    hobbies = ["eating", "travelling", "dancing", "playing"];

    let styles = {backgroundColor:name=="gaurisha"?"green":null};
    let fontSize = {fontSize:name =="Ram"?"larger":null};

    return (

        <div className="info" style={styles} fontSize = {fontSize}>
            <h3>Name of student = {name}</h3>
            {/* <h4>Age of student = {age}</h4> */}
            {age>18?<h4>Adult</h4>:<h4>Not an Adult</h4>}
            <h5>Roll number of student = {rollNo}</h5>
            <h3> Hobbies = {hobbies.map((hobbies) => <li>{hobbies}</li>)}</h3>
            <hr />
        </div>
    )
}

export default Student;