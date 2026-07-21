import { useNavigate } from 'react-router';
import { supabase } from '../supabase';

import KnightIcon from '../assets/knight-icon.svg?react';
import './KnightSummaryCard.css';

interface KnightSummaryCardProps {
	knight_id: number;
	name: string;
	magic: string;
	weapon: string;
	pet: string;
	color: string;
	onDelete: (knight_id: number) => void;
}

export default function KnightSummaryCard({ knight_id, name, magic, weapon, pet, color, onDelete }: KnightSummaryCardProps) {
	const navigate = useNavigate();

	const handleDelete = async () => {
		const { error } = await supabase.from('knights').delete().eq('knight_id', knight_id);
		if (error) {
			console.error(error);
		} else {
			onDelete(knight_id);
		}
	};

	return (
		<div className="card">
			<h2>{name}</h2>
			<KnightIcon className="knight-icon" style={{ color: color }} />
			<p>Magic: {magic}</p>
			<p>Weapon: {weapon}</p>
			<p>Pet: {pet}</p>
			<div className="button-container">
				<button onClick={() => navigate(`/edit/${knight_id}`)}>Edit</button>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
}
