import { supabase } from '../supabase';
import { useState, useEffect } from 'react';

import KnightSummaryCard from '../components/KnightSummaryCard';
import './Main.css';

export default function KnightsGallery() {
	const [knights, setKnights] = useState<any[]>([]);

	useEffect(() => {
		const fetchKnights = async () => {
			const { data, error } = await supabase.from('knights').select('*').order('created_at', { ascending: false });
			if (error) {
				console.log(error);
			} else {
				setKnights(data);
			}
		};
		fetchKnights();
	}, []);

	const total = knights.length;
	const magicCount = knights.filter((k) => k.magic).length;
	const weaponCount = knights.filter((k) => k.weapon).length;
	const petCount = knights.filter((k) => k.pet).length;
	const pct = (n: number) => (total === 0 ? '0%' : `${Math.round((n / total) * 100)}%`);

	return (
		<div className="main-layout">
			<h1>View Your Knights Gallery!</h1>
			<div className="gallery-layout">
				<div className="gallery-stats-card">
					<h3>Army Stats</h3>
					<div className="gallery-stats-row">
						<p>
							Magic Users: {magicCount} ({pct(magicCount)})
						</p>
						<span className="gallery-stats-divider">|</span>
						<p>
							Weapon Wielders: {weaponCount} ({pct(weaponCount)})
						</p>
						<span className="gallery-stats-divider">|</span>
						<p>
							Pet Owners: {petCount} ({pct(petCount)})
						</p>
					</div>
				</div>
				<div className="gallery-container">
					{knights.map((knight) => (
						<KnightSummaryCard
							key={knight.knight_id}
							knight_id={knight.knight_id}
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
		</div>
	);
}
