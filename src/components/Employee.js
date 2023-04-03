function Employee(props){
    return (
    <>
        <p>Employee {props.name}</p>
        {<p>{props.role ? props.role : "No role"}</p> }
       {/* <p>{props.role ? 
        <p className="role">{props.role}</p>
       :<p className="norole">No role</p>}</p>*/}
    </>
    )
    }
export default Employee;