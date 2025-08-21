const FormInput = ({
	type,
	name,
	label,
	icon,
	placeholder,
	value,
	onChange,
	onBlur,
	error,
	showPasswordToggle = false,
	onTogglePassword,
}) => {
	return (
		<div>
			<label
				htmlFor={name}
				className="block text-sm font-medium text-gray-700 mb-2"
			>
				{icon && <i className={`${icon} text-blue-500 mr-2`}></i>}
				{label}
			</label>
			<div className="relative">
				<input
					type={type}
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					placeholder={placeholder}
					className={`w-full px-4 py-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
						error
							? 'border-red-500 shake'
							: value && !error
							? 'border-green-500'
							: 'border-gray-300'
					}`}
				/>
				{icon && (
					<i
						className={`${icon} absolute left-3 top-1/2 transform -translate-1/2 text-gray-400`}
					></i>
				)}
				{showPasswordToggle && (
					<button
						type="button"
						onClick={onTogglePassword}
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
					>
						<i
							className={
								type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash'
							}
						></i>
					</button>
				)}
			</div>
			{error && <p className="text-red-500 text-sm mt-2 fade-in">{error}</p>}
		</div>
	);
};

export default FormInput;
