/** @format */

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

// I use static modal bootstrap
// I use inline Form tailwindcss
function AddEmployee(props) {
	const [show, setShow] = useState(false);

	const [name, setName] = useState('')
	const [role, setRole] = useState('')
	const [image, setImage] = useState('')
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<button
				onClick={handleShow}
				className='block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white  py-2 px-4 rounded'
			>
				+ ADD CHARACTER
			</button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title className="text-purple-500">New Character</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form
						onSubmit={(e)=>{
							e.preventDefault()
							handleClose()
							setName("")
							setRole("")
							setImage("")
							props.newEmployee(name,role,image)

						}}
						id='addForm'
						className='w-full max-w-sm'
					>
						<div className='md:flex md:items-center mb-6'>
							<div className='md:w-1/3'>
								<label
									className='block text-purple-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
									htmlFor='new-name'
								>
									Name
								</label>
							</div>
							<div className='md:w-2/3'>
								<input
									className='bg-gray-200 appearance-none border-2 border-purple-200 rounded w-full py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
									id='new-name'
									placeholder="ibrahim eid"
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
									htmlFor='new-role'
								>
									Role
								</label>
							</div>
							<div className='md:w-2/3'>
								<input
									className='bg-gray-200 appearance-none border-2 border-purple-200 rounded w-full py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
									id='new-role'
									placeholder="Dev"
									type='text'
									value = {role}
									onChange = {(e)=> {
										setRole(e.target.value)
									}}
								/>
							</div>
						</div>
						<div className='md:flex md:items-center mb-6'>
							<div className='md:w-1/3'>
								<label
									className='block text-purple-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
									htmlFor='new-image'
								>
									Image URL
								</label>
							</div>
							<div className='md:w-2/3'>
								<input
									className='bg-gray-200 appearance-none border-2 border-purple-200 rounded w-full py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
									id='new-image'
									type='text'
									placeholder="https://google.com"
									value={image}
									onChange={(e)=> setImage(e.target.value)}
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
						form='addForm'
						className='shadow bg-purple-500 text-sm hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 py-1 rounded-full'
					>
						Add
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddEmployee;
