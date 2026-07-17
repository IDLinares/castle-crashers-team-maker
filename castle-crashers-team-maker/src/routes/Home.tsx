import homeImg from '../assets/castle-crashers-home.png';
import './Home.css';

export default function Home() {
	return (
		<div className="home">
			<h1>Welcome to Castle Crashers Team Maker!</h1>
			<h2>Here you can create your own knight team before sending them off to save the princess!</h2>
			<img src={homeImg} alt="Castle Crashers Home" />
		</div>
	);
}
