import './App.css';
import Employee from './components/Employee';
function App() {
  console.log("we are about to list the employees");
  const showEmployees = false;
  return (
    <div className="App">
      {showEmployees 
      ?
      <>
      <Employee/>
      <Employee/>
      <Employee/>
      </>
      :<p>you can not see the Employee</p> 
      }
    </div>
  );
}

export default App;
