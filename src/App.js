import React from 'react';
import Proptypes from 'prop-types';

const App = () => {
	const profiles = [
		{ name: 'Taro', age: 10 },
		{ name: 'Haan', age: 100 },
		{ name: 'noname', age: 10 },
		{},
	];
	return (
		<div>
			{profiles.map((profile, index) => {
				return (
					<User
						name={profile.name}
						age={profile.age}
						key={index}
					></User>
				);
			})}
		</div>
	);
	// return (
	// 	<div>
	// 		<User name={'Taro'} age={5} />
	// 		<User name={'Taros'} age={50} />
	// 	</div>
	// );
};

const User = (props) => {
	return (
		<div>
			Hi, I'm {props.name} and {props.age} years old
		</div>
	);
};

User.propTypes = {
	name: Proptypes.string,
	age: Proptypes.number,
};

export default App;
