/** @format */

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

// I use static modal bootstrap
// I use inline Form tailwindcss
function EditEmployee(props) {
	const [show, setShow] = useState(false);

	const [name, setName] = useState(props.name)
	const [role, setRole] = useState(props.role)
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<button
				onClick={handleShow}
				className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
			>
				Update
			</button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title className="text-purple-500">Update Character</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form
						onSubmit={(e)=>{
							e.preventDefault()
							handleClose()
							props.updateEmployee(props.id,name, role)
						}}
						id='EditForm'
						className='w-full max-w-sm'
					>
						<div className='md:flex md:items-center mb-6'>
							<div className='md:w-1/3'>
								<label
									className='block text-purple-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
									htmlFor='name'
								>
									Name
								</label>
							</div>
							<div className='md:w-2/3'>
								<input
									className='bg-gray-200 appearance-none border-2 border-purple-200 rounded w-full py-2 px-4 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
									id='name'
									type='text'
									value={name}
									onChange={(e)=> setName(e.target.value)}
								/>
							</div>
						</div>
						<div className='md:flex md:items-center mb-6'>
							<div className='md:w-1/3'>
								<label
									className='block text-purple-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
									htmlFor='role'
								>
									Role
								</label>
							</div>
							<div className='md:w-2/3'>
								<input
									className='bg-gray-200 appearance-none border-2 border-purple-200 rounded w-full py-2 px-4 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
									id='role'
									type='text'
									value = {role}
									onChange = {(e)=> {
										setRole(e.target.value)
									}}
								/>
							</div>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<button
						onClick={handleClose}
						className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
					>
						Close
					</button>
					<button
						form='EditForm'
						className='shadow bg-purple-500 text-sm hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 py-1 rounded-full'
					>
						Update
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default EditEmployee;
