/** @format */

import "./index.css";
import { useState } from "react";
import {v4 as uuidv4} from "uuid"
import Employee from "./components/Employee";
function App() {
	const [employees, setEmployees] = useState([
		{
			name: "Levi ackermann",
			role: "leader",
			srcImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdH-N4nRJrg7SYx4-10jGc9mNnUJLXM_EEw&usqp=CAU",
		},
		{
			name: "Eren Yaeger",
			role: "leader",
			srcImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMALRfcbgdelTWaf5aestHThjTjQg5ribUguB9ZXZ74bXTlz0-vCKc6mmaNdRrsY9foAc&usqp=CAU",
		},
		{
			name: "Mikasa ackermann",
			role: "leader",
			srcImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL__R4ppPoMftL_2Qftyrd-JChMgiW_duq4Q&usqp=CAU",
		},
		{
			name: "Flock Forster",
			role: "leader",
			srcImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHhRvWnE-lg4b3gtcjcpw2h-tFjausuoInQ&usqp=CAU",
		},
		{
			name: "Erwin Smith",
			role: "leader",
			srcImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBM3pLqLHgeqsSxO8gfvWfVSRIAAyGan9Ng&usqp=CAU",
		},
		{
			name: "Armin Arilet",
			role: "leader",
			srcImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA50Ifqty97wlQdqTHVW4kKEal_woFVQgyQA&usqp=CAU",
		},
		{
			name: "Sasha Braus ",
			role: "leader",
			srcImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrG2jkRCRRoRoGy2N7Mxuhf-ruD2qw2_lHCA&usqp=CAU",
		},
		{
			name: "Reiner Braun",
			role: "leader",
			srcImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74XvapjqQdl0YEzNwhEC97VnP1NQrlPUEKQ&usqp=CAU",
		},
		{
			name: "Zake Yaeger",
			role: "leader",
			srcImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm84DOb0k3ztEftJwRy821sjZihv9GfxNAXA&usqp=CAU",
		},
	]);
	const showEmployees = true;
	return (
		<div className='App'>
			{showEmployees ? (
				<>
					<div className='flex flex-wrap justify-center'>
						{employees.map(employee => {
							return (<Employee
								key={uuidv4()}
								name={employee.name}
								role={employee.role}
								srcImage={employee.srcImage}
							/>)
						})}
					</div>
				</>
			) : (
				<p>you can not see the Employee</p>
			)}
		</div>
	);
}

export default App;
