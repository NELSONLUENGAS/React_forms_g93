import React from 'react';

const Input = ({ label, type = 'text', name, value, onChange, error }) => {
	return (
		<div className="mb-4">
			<label
				htmlFor={name}
				className="block text-gray-700 text-sm font-bold mb-2"
			>
				{label}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
					error ? 'border-red-500' : ''
				}`}
			/>
			{error && <p className="text-red-500 text-sm italic mt-1">{error}</p>}
		</div>
	);
};

export default Input;
