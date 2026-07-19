import { supabase } from '../supabase';
import { useState, useEffect } from 'react';

import KnightSummaryCard from '../components/KnightSummaryCard';
import './Main.css';

export default function KnightsGallery() {
	const [knights, setKnights] = useState<any[]>([]);

	useEffect(() => {
		const fetchKnights = async () => {
			const { data, error } = await supabase.from('knights').select('*');
			if (error) {
				console.log(error);
			} else {
				setKnights(data);
			}
		};
		fetchKnights();
	}, []);

	return (
		<div className="main-layout">
			<h1>View Your Knights Gallery!</h1>
			<div className="gallery-container">
				{knights.map((knight) => (
					<KnightSummaryCard
						key={knight.knight_id}
						id={knight.knight_id}
						name={knight.name}
						magic={knight.magic}
						weapon={knight.weapon}
						pet={knight.pet}
						color={knight.color}
						onDelete={(id) => setKnights((prev) => prev.filter((k) => k.knight_id !== id))}
					/>
				))}
			</div>
		</div>
	);
}
