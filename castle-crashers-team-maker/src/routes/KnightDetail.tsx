import { useParams, useNavigate } from 'react-router';
import { supabase } from '../supabase';
import { useEffect, useState } from 'react';
import KnightIcon from '../assets/knight-icon.svg?react';
import './Main.css';

interface Knight {
	knight_id: number;
	name: string;
	magic: string | null;
	weapon: string | null;
	pet: string | null;
	color: string;
}

function getDescription(magic: string | null, weapon: string | null, pet: string | null) {
	const count = [magic, weapon, pet].filter(Boolean).length;
	if (count === 0) return "Maybe he's a good leader? Probably not ready for battle though.";
	if (count === 3) return `A fully equipped knight ready to save the princess with ${magic} magic, ${weapon} weapon, and a ${pet} companion.`;
	if (count === 2) {
		if (!magic) return `A ${weapon} wielding knight with a ${pet} companion. Ready for physical combat, but not elemental combat.`;
		if (!weapon) return `A knight with a ${magic} magic and a ${pet} companion. Ready for magical combat, but not physical combat.`;
		if (!pet) return `A ${magic} knight with a ${weapon} weapon. Ready for all types of combat, but they might get lonely.`;
	}
	if (count === 1) {
		if (magic) return `A knight with a ${magic} magic. Ready for magical combat, but still needs a weapon and companion.`;
		if (weapon) return `A ${weapon} wielding knight. Ready for physical combat, but still needs magic and companion.`;
		if (pet) return `A knight with a ${pet} companion. Not ready for battle, but at least they're not lonely.`;
	}
}

export default function KnightDetail() {
	const [knightDetails, setKnightDetails] = useState<Knight | null>(null);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchKnight = async () => {
			const { data, error } = await supabase.from('knights').select('*').eq('knight_id', Number(id));
			if (error) {
				console.log(error);
			} else {
				setKnightDetails(data[0]);
			}
		};
		fetchKnight();
	}, []);

	return (
		<div className="main-layout">
			<h1>{knightDetails?.name ? `${knightDetails.name} Details` : `Details`}</h1>
			<div className="two-col-layout">
				<div className="name-section">
					<KnightIcon className="knight-icon" style={{ color: knightDetails?.color }} />
				</div>
				<div className="attributes-section">
					<h2>Knight's Attributes</h2>
					<p>Magic: {knightDetails?.magic ?? 'None'}</p>
					<p>Weapon: {knightDetails?.weapon ?? 'None'}</p>
					<p>Pet: {knightDetails?.pet ?? 'None'}</p>
					<p>Color: {knightDetails?.color}</p>
				</div>
			</div>
			<h3>{getDescription(knightDetails?.magic, knightDetails?.weapon, knightDetails?.pet)}</h3>
			<div className="button-container">
				<button onClick={() => navigate(`/edit/${id}`)}>Edit Knight</button>
			</div>
		</div>
	);
}
