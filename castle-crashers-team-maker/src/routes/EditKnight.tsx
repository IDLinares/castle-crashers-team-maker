import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { supabase } from '../supabase';

import homeImg from '../assets/castle-crashers-home.png';
import CreateKnightForm from '../components/CreateKnightForm';
import type { FormValues } from '../components/CreateKnightForm';
import './Main.css';

interface Knight {
	knight_id: number;
	name: string;
	magic: string | null;
	weapon: string | null;
	pet: string | null;
	color: string;
}

export default function EditKnight() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [knight, setKnight] = useState<Knight | null>(null);

	useEffect(() => {
		const fetchKnight = async () => {
			const { data, error } = await supabase.from('knights').select('*').eq('knight_id', Number(id));
			if (error) {
				console.log(error);
			} else {
				setKnight(data[0]);
			}
		};
		fetchKnight();
	}, []);

	const handleSubmit = async (changed: Partial<FormValues>) => {
		if (Object.keys(changed).length === 0) return;
		const payload = Object.fromEntries(Object.entries(changed).map(([k, v]) => [k, v === '' ? null : v]));
		const { error } = await supabase.from('knights').update(payload).eq('knight_id', Number(id));
		if (error) {
			console.log(error);
		} else {
			navigate('/gallery');
		}
	};

	const handleDelete = async () => {
		const { error } = await supabase.from('knights').delete().eq('knight_id', id);
		if (error) {
			console.error(error);
		} else {
			navigate('/gallery');
		}
	};

	const initialValues: Partial<FormValues> | undefined = knight
		? {
				name: knight.name,
				magic: knight.magic ?? '',
				weapon: knight.weapon ?? '',
				pet: knight.pet ?? '',
				color: knight.color,
			}
		: undefined;

	return (
		<div className="main-layout">
			<h1>Update Your Knight!</h1>
			<img src={homeImg} alt="Castle Crashers Home" />
			<div className="edit-section">
				<div className="current-knight-section">
					<h3>Current Knight's Attributes</h3>
					<div className="card">
						<h2>Name: {knight?.name}</h2>
						<p>Magic: {knight?.magic ?? 'None'}</p>
						<p>Weapon: {knight?.weapon ?? 'None'}</p>
						<p>Pet: {knight?.pet ?? 'None'}</p>
						<p>Color: {knight?.color}</p>
					</div>
				</div>
				<span className="edit-arrow">→</span>
				<div className="update-section">
					<h3>Updated Knight's Attributes</h3>
					<CreateKnightForm key={knight?.knight_id} initialValues={initialValues} onSubmit={handleSubmit} />
				</div>
			</div>
			<div className="button-container">
				<button type="submit" form="knight-form">
					Update Knight
				</button>
				<button type="button" onClick={handleDelete}>
					Delete Knight
				</button>
			</div>
		</div>
	);
}
