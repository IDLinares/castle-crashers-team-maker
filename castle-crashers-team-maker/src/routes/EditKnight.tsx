import homeImg from '../assets/castle-crashers-home.png';
import CreateKnightForm from '../components/CreateKnightForm';
// import './CreateKnight.css';

export default function EditKnight() {
	return (
		<div className="main-layout">
			<div className="edit-knight-header">
				<h1>Update Your Knight!</h1>
				<img src={homeImg} alt="Castle Crashers Home" />
			</div>
			<div className="edit-section">
				<div className="current-knight-section">
					<h3>Current Knight's Attributes</h3>
					<div className="card">
						<h2>{name}</h2>
						<KnightIcon className="knight-icon" style={{ color: color }} />
						<p>Magic: {magic}</p>
						<p>Weapon: {weapon}</p>
						<p>Pet: {pet}</p>
					</div>
				</div>
				<div className="update-section">
					<CreateKnightForm />
				</div>
			</div>
		</div>
	);
}
