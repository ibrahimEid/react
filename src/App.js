import './App.css';
import { useState } from 'react';
import Employee from './components/Employee';
function App() {
  const [role, setRole] = useState("dev")
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees 
      ?
      <>
      <input type={"text"} onChange={(e)=> {
        console.log(e.target.value)
        setRole(e.target.value)
      }
      }/>
      <Employee name="ibrahim" role="student"/>
      <Employee name="ethib" role="software engineer"/>
      <Employee name="sami" role={role}/>
      </>
      :<p>you can not see the Employee</p> 
      }
    </div>
  );
}

export default App;
