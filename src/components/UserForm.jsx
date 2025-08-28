import React, { useState } from 'react';
import Input from './Input';

const UserForm = ({ onAddUser }) => {
	const [formData, setFormData] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});

		if (errors[name]) {
			setErrors({
				...errors,
				[name]: '',
			});
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
		if (!formData.username.trim())
			newErrors.username = 'El nombre de usuario es obligatorio';
		if (!formData.email.trim()) {
			newErrors.email = 'El email es obligatorio';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'El email no tiene un formato válido';
		}
		if (!formData.password.trim()) {
			newErrors.password = 'La contraseña es obligatoria';
		} else if (formData.password.length < 6) {
			newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
		}

		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formErrors = validateForm();
		/**
		 * formErrors = {
		 *  name: 'El nombre es requerido',
		 *  password: 'La contraseña es requerida'
		 * }
		 *
		 * Object.keys(formErrors) => [name, password]
		 */
		if (!Object.keys(formErrors).length) {
			setIsSubmitting(true);
			setTimeout(() => {
				const newUser = {
					id: Date.now(),
					...formData,
				};

				onAddUser(newUser);

				setFormData({
					name: '',
					username: '',
					email: '',
					password: '',
				});

				setErrors({});
				setIsSubmitting(false);
			}, 2000);
		} else {
			setErrors(formErrors);
		}
	};

	return (
		<div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-6 text-gray-800">
				Registro de usuarios
			</h2>

			<form onSubmit={handleSubmit}>
				<Input
					label={'Name'}
					type="text"
					name={'name'}
					value={formData.name}
					onChange={handleChange}
					error={errors.name}
				/>
				<Input
					label={'Username'}
					type="text"
					name={'username'}
					value={formData.username}
					onChange={handleChange}
					error={errors.username}
				/>
				<Input
					label={'Email'}
					type="email"
					name={'email'}
					value={formData.email}
					onChange={handleChange}
					error={errors.email}
				/>
				<Input
					label={'Password'}
					type="password"
					name={'password'}
					value={formData.password}
					onChange={handleChange}
					error={errors.password}
				/>
				<button
					type="submit"
					disabled={isSubmitting}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50"
				>
					{isSubmitting ? 'Registrando..' : 'Registrar'}
				</button>
			</form>
		</div>
	);
};

export default UserForm;
