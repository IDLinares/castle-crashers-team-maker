import { useNavigate } from 'react-router';
import { supabase } from '../supabase';

import KnightIcon from '../assets/knight-icon.svg?react';
import './KnightSummaryCard.css';

interface KnightSummaryCardProps {
	id: number;
	name: string;
	magic: string;
	weapon: string;
	pet: string;
	color: string;
	onDelete: (id: number) => void;
}

export default function KnightSummaryCard({ id, name, magic, weapon, pet, color, onDelete }: KnightSummaryCardProps) {
	const navigate = useNavigate();

	const handleDelete = async () => {
		const { error } = await supabase.from('knights').delete().eq('knight_id', id);
		if (error) {
			console.error(error);
		} else {
			onDelete(id);
		}
	};

	return (
		<div className="card">
			<h2>{name}</h2>
			<KnightIcon className="knight-icon" style={{ color: color }} />
			<p>Magic: {magic}</p>
			<p>Weapon: {weapon}</p>
			<p>Pet: {pet}</p>
			<div className="summary-buttons">
				<button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
}
