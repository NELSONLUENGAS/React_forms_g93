import { useState } from 'react';
import FormInput from './FormInput';
import PasswordStrength from './PasswordStrength';

const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({});
	const [showPassword, setShowPassword] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const validateField = (name, value) => {
		let error = '';

		switch (name) {
			case 'name':
				if (!value.trim()) error = 'El nombre es obligatorio';
				else if (value.length < 2)
					error = 'El nombre debe tener al menos 2 caracteres';
				else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
					error = 'El nombre solo puede tener letras y espacios';
				break;
			case 'username':
				if (!value.trim()) error = 'El nombre de usuario es obligatorio';
				else if (value.length < 3)
					error = 'El nombre de usuario debe tener al menos 3 caracteres';
				else if (!/^[a-zA-Z0-9_]+$/.test(value))
					error =
						'El nombre de usuario solo puede tener letras, números y guines bajos';
				break;
			case 'email':
				if (!value.trim()) error = 'El email es obligatorio';
				else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
					error = 'Por favor, introduce un email válido';
				break;
			case 'password':
				if (!value.trim()) error = 'La contraseña es obligatoria';
				else if (value.length < 8)
					error = 'La contraseña debe tener al menos 8 caracteres';
				else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value))
					error =
						'La contraseña debe contener al menos una minúscula, una mayúscula y un número';
				break;
			default:
				break;
		}

		return error;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });

		// limpiar errores
		if (errors[name]) {
			setErrors({ ...errors, [name]: '' });
		}
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;

		const error = validateField(name, value);
		setErrors({ ...errors, [name]: error });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newErrors = {};

		// Validar todos los campos
		Object.keys(formData).forEach((key) => {
			const error = validateField(key, formData[key]);
			if (error) newErrors[key] = error;
		});

		setErrors(newErrors);

		if (!Object.keys(newErrors).length) {
			setIsSubmitting(true);

			setTimeout(() => {
				setIsSubmitting(false);
				setSubmitSuccess(true);

				// ocultar mensaje
				setTimeout(() => {
					setSubmitSuccess(false);
				}, 5000);
			}, 1500);
		}
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md">
			<div className="text-center mb-8">
				<h1 className="text-3xl font-bold text-gray-800 mb-2">Crear cuenta</h1>
				<p className="text-gray-600">
					Regístrate para acceder a todos nuestros servicios
				</p>
			</div>
			<form
				onSubmit={handleSubmit}
				className="space-y-5"
			>
				<FormInput
					type={'text'}
					name={'name'}
					label={'Nombre completo'}
					icon={'fas fa-user'}
					placeholder={'Ej: Juan Pérez'}
					value={formData.name}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.name}
				/>

				<FormInput
					type={'text'}
					name={'username'}
					label={'Nombre de usuario'}
					icon={'fas fa-at'}
					placeholder={'Ej: juanperez2023'}
					value={formData.username}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.username}
				/>

				<FormInput
					type={'email'}
					name={'email'}
					label={'Correo eleçtrónico'}
					icon={'fas fa-envelope'}
					placeholder={'Ej: ejemplo@correo.com'}
					value={formData.email}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.email}
				/>

				<div>
					<FormInput
						type={'password'}
						name={'password'}
						label={'Contraseña'}
						icon={'fas fa-lock'}
						placeholder={'Mínimo 8 caracteres'}
						value={formData.password}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.password}
					/>
					<PasswordStrength password={formData.password} />
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-blue-600 text-white py-3 px-4"
				>
					{isSubmitting ? (
						<>
							<i className="fas fa-spinner fa-spin mr-2"></i>
							Procesando...
						</>
					) : (
						<>
							<i className="fas fa-user-plus mr-2"></i>
							Registrarse
						</>
					)}
				</button>
			</form>

			{submitSuccess && (
				<div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center fade-in">
					¡Registro exitoso!
				</div>
			)}
		</div>
	);
};

export default RegistrationForm;
