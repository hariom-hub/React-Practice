import Student from "./students";

function StudentInfo(){
    // const hobbies1 = ["coding","dancing","Travelling","interacting"];
    // const hobbies2 = ["sleeping","eating","crying"];
    // const hobbies3 = ["neet","clat","neet","upsc"];
    // const listHobbies = hobbies1.map((hobbies1)=><li>{hobbies1}</li>)

    return(

        <div className="box">
            <Student  name = "hariom" age= {20} rollNo={120 } />
            <Student name = "gaurisha" age = {19} rollNo={121} />
            <Student name = "shreesha" age={23} rollNo={122}  />
            <Student name = "Ram" age={10} rollNo={124}  />

        </div>
    )
}

export default StudentInfo;