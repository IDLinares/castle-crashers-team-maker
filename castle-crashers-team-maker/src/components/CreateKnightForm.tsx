import './CreateKnightForm.css';

const magicOptions = ['Fire', 'Ice', 'Lightning', 'Wind', 'Earth', 'Water', 'Poison'];
const petOptions = ['Chicken', 'Falcon', 'Zebra', 'Piggy', 'Cardinal', 'Bat', 'Seahorse'];
const weaponOptions = ['Sword', 'Mace', 'Axe', 'Scissors', 'Light Saber', 'Bow', 'Bomb'];

export default function CreateKnightForm() {
	return (
		<div className="card-container">
			<div className="card">
				<form className="create-knight-form">
					<label htmlFor="knight-name">Knight Name</label>
					<input type="text" id="knight-name" placeholder="Enter knight name" />
					<label htmlFor="knight-magic">Knight Magic</label>
					<select id="knight-magic" name="knight-magic">
						{magicOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<label htmlFor="knight-weapon">Knight Weapon</label>
					<select id="knight-weapon" name="knight-weapon">
						{weaponOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<label htmlFor="knight-pet">Knight Pet</label>
					<select id="knight-pet" name="knight-pet">
						{petOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<label htmlFor="knight-color">Knight Color</label>
					<input type="color" id="knight-color" name="knight-color" />
					<button type="submit">Create Knight</button>
					<button type="reset">Reset</button>
				</form>
			</div>
		</div>
	);
}
