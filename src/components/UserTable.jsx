import React from 'react';

const UserTable = ({ users }) => {
	if (!users.length) {
		return (
			<div className="bg-white p-8 rounded-lg shadow-md text-center">
				<h2 className="text-2xl font-bold mb-4 text-gray-800">
					Lista de Usuarios
				</h2>
				<div className="py-8">
					<p className="mt-4 text-gray-600">No hay usuarios registrados</p>
					<p className="text-sm text-gray-500">
						Los ususarios registrados aparecerán aquí
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-white p-8 rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4 text-gray-800">
				Lista de usuarios
			</h2>
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white rounded-lg overflow-hidden">
					<thead className="bg-gray-800 text-white">
						<tr>
							<th className="px-4 py-3 text-left">ID</th>
							<th className="px-4 py-3 text-left">Nombre</th>
							<th className="px-4 py-3 text-left">Username</th>
							<th className="px-4 py-3 text-left">Email</th>
						</tr>
					</thead>
					<tbody className="text-gray-700">
						{users.map((user, index) => (
							<tr
								key={user.id}
								className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
							>
								<td className="px-4 py-3">{user.id}</td>
								<td className="px-4 py-3">{user.name}</td>
								<td className="px-4 py-3">{user.username}</td>
								<td className="px-4 py-3">{user.email}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserTable;
