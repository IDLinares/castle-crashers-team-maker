import { Outlet, NavLink } from 'react-router';
import './RootLayout.css';

export default function RootLayout() {
	return (
		<div className="root-layout">
			<header>
				<nav className="sidebar">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/create">Create a Knight!</NavLink>
					<NavLink to="/gallery">Knights Gallery</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
