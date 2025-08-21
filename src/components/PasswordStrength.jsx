import { useMemo } from 'react';

const PasswordStrength = ({ password }) => {
	const strength = useMemo(() => {
		if (!password) {
			return {
				strength: 0,
				text: 'Muy débil',
				color: 'bg-red-500',
			};
		}

		let strengthValue = 0;

		// longitud
		if (password.length > 7) strengthValue += 1;

		// Tiene mayúsculas y minúsculas
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strengthValue += 1;

		// Tiene números
		if (password.match(/([0-9])/)) strengthValue += 1;

		// Tiene caracteres especiales
		if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/)) strengthValue += 1;

		let text, color;

		switch (strengthValue) {
			case 0:
			case 1:
				text = 'Muy débil';
				color = 'bg-red-500';
				break;
			case 2:
				text = 'Débil';
				color = 'bg-orange-500';
				break;
			case 3:
				text = 'Buena';
				color = 'bg-yellow-500';
				break;
			case 4:
				text = 'Fuerte';
				color = 'bg-green-500';
				break;
			default:
				text = 'Muy débil';
				color = 'bg-red-500';
				break;
		}

		const percentage = strengthValue * 25;

		return {
			strength: percentage,
			text,
			color,
		};
	}, [password]);
	return (
		<div className="mt-2">
			<div className="flex items-center mb-1">
				<div className="h-2 flex-1 rounded-full bg-gray-200 mr-2">
					<div
						className={`h-full rounded-full transition-all duration-500 ${strength.color}`}
						style={{ width: `${strength.strength}%` }}
					></div>
				</div>
				<span className="text-xs font-medium">{strength.text}</span>
			</div>
		</div>
	);
};

export default PasswordStrength;
