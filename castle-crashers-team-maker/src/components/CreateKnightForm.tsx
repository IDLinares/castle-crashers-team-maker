import { useState } from 'react';
import './CreateKnightForm.css';

const magicOptions = ['Fire', 'Ice', 'Lightning', 'Wind', 'Earth', 'Water', 'Poison'];
const petOptions = ['Chicken', 'Falcon', 'Zebra', 'Piggy', 'Cardinal', 'Bat', 'Seahorse'];
const weaponOptions = ['Sword', 'Mace', 'Axe', 'Scissors', 'Light Saber', 'Bow', 'Bomb'];

export interface FormValues {
	name: string;
	magic: string;
	weapon: string;
	pet: string;
	color: string;
}

interface Props {
	initialValues?: Partial<FormValues>;
	onSubmit: (values: Partial<FormValues>) => void;
}

const defaultValues: FormValues = {
	name: '',
	magic: '',
	weapon: '',
	pet: '',
	color: '#000000',
};

export default function CreateKnightForm({ initialValues, onSubmit }: Props) {
	const [values, setValues] = useState<FormValues>({
		...defaultValues,
		...initialValues,
	});

	const handleChange = (e: { target: { name: string; value: string } }) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (!initialValues) {
			onSubmit(values);
			return;
		}
		const changed: Partial<FormValues> = {};
		for (const key of Object.keys(values) as (keyof FormValues)[]) {
			const initial = initialValues[key] ?? defaultValues[key];
			if (values[key] !== initial) {
				changed[key] = values[key];
			}
		}
		onSubmit(changed);
	};

	const handleReset = () => {
		setValues({ ...defaultValues, ...initialValues });
	};

	return (
		<div className="card-container">
			<div className="card">
				<form id="knight-form" className="create-knight-form" onSubmit={handleSubmit} onReset={handleReset}>
					<label htmlFor="knight-name">Knight Name</label>
					<input
						type="text"
						id="knight-name"
						name="name"
						placeholder="Enter knight name"
						value={values.name}
						onChange={handleChange}
					/>
					<label htmlFor="knight-magic">Knight Magic</label>
					<select id="knight-magic" name="magic" value={values.magic} onChange={handleChange}>
						<option value="">None</option>
						{magicOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<label htmlFor="knight-weapon">Knight Weapon</label>
					<select id="knight-weapon" name="weapon" value={values.weapon} onChange={handleChange}>
						<option value="">None</option>
						{weaponOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<label htmlFor="knight-pet">Knight Pet</label>
					<select id="knight-pet" name="pet" value={values.pet} onChange={handleChange}>
						<option value="">None</option>
						{petOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<label htmlFor="knight-color">Knight Color</label>
					<input
						type="color"
						id="knight-color"
						name="color"
						value={values.color}
						onChange={handleChange}
					/>
				</form>
			</div>
		</div>
	);
}
