import { useNavigate } from 'react-router';
import { supabase } from '../supabase';
import homeImg from '../assets/castle-crashers-home.png';
import CreateKnightForm from '../components/CreateKnightForm';
import type { FormValues } from '../components/CreateKnightForm';
import './Main.css';

export default function CreateKnight() {
	const navigate = useNavigate();

	const handleSubmit = async (values: Partial<FormValues>) => {
		const { error } = await supabase.from('knights').insert({
			name: values.name,
			magic: values.magic || null,
			weapon: values.weapon || null,
			pet: values.pet || null,
			color: values.color,
		});
		if (error) {
			console.log(error);
		} else {
			navigate('/gallery');
		}
	};

	return (
		<div className="main-layout">
			<h1>Create a Knight</h1>
			<img src={homeImg} alt="Castle Crashers Home" />
			<h2>Choose your knight's name and attributes!</h2>
			<CreateKnightForm onSubmit={handleSubmit} />
			<div className="button-container">
				<button type="submit" form="knight-form">
					Create Knight
				</button>
				<button type="reset" form="knight-form">
					Reset
				</button>
			</div>
			<h3>You can change your knight's attributes later!</h3>
		</div>
	);
}
