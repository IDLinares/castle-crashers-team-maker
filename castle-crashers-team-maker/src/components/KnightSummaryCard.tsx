import KnightIcon from '../assets/knight-icon.svg?react';
import './KnightSummaryCard.css';

interface KnightSummaryCardProps {
	name: string;
	magic: string;
	weapon: string;
	pet: string;
	color: string;
}

export default function KnightSummaryCard({ name, magic, weapon, pet, color }: KnightSummaryCardProps) {
	return (
		<div className="card">
			<h2>{name}</h2>
			<KnightIcon className="knight-icon" style={{ color: color }} />
			<p>Magic: {magic}</p>
			<p>Weapon: {weapon}</p>
			<p>Pet: {pet}</p>
		</div>
	);
}
