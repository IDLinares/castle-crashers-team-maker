import homeImg from '../assets/castle-crashers-home.png';
import CreateKnightForm from '../components/CreateKnightForm';
// import './CreateKnight.css';

export default function CreateKnight() {
	return (
		<div className="main-layout">
			<div className="create-knight-header">
				<h1>Create a Knight</h1>
				<h2>Choose your knight's name and stats!</h2>
				<img src={homeImg} alt="Castle Crashers Home" />
			</div>
			<CreateKnightForm />
			<p>You can change your knight's attributes later!</p>
		</div>
	);
}
