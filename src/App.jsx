import { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

function App() {
	const initialUsers = [
		{
			id: 1,
			name: 'Ana García',
			username: 'anag',
			email: 'ana@example.com',
			password: 'password123',
		},
		{
			id: 2,
			name: 'Carlos Rodríguez',
			username: 'carlosr',
			email: 'carlos@example.com',
			password: 'password123',
		},
		{
			id: 3,
			name: 'María López',
			username: 'marial',
			email: 'maria@example.com',
			password: 'password123',
		},
	];

	const [users, setUsers] = useState([]);

	const handleAddUser = (newUser) => {
		setUsers([...users, newUser]);
	};

	return (
		// <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center p-4">
		// 	<RegistrationForm />
		// </div>
		<div className="container mx-auto p-4 min-h-screen bg-gray-100">
			<h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
				Sistema de registro de usuarios
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<div>
					<UserForm onAddUser={handleAddUser} />
				</div>
				<div>
					<UserTable users={users} />
				</div>
			</div>
		</div>
	);
}

export default App;
