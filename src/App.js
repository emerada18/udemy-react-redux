import React from 'react';

// function App() {
// const greeting = 'Hello';
// const dom = <h1>Hi</h1>;
// const dom = <h1 className="foo">{greeting}</h1>;
// return dom;
// return (
// return (
// <div>
// 	<label htmlFor="bar">bar</label>
// 	<input
// 		type="text"
// 		onChange={() => {
// 			console.log('I am clicked');
// 		}}
// 	/>
// </div>
// 	<React.Fragment>
// 		<label htmlFor="bar">bar</label>
// 		<input
// 			type="text"
// 			onChange={() => {
// 				console.log('I am clicked');
// 			}}
// 		/>
// 	</React.Fragment> //divを出力しないため
// );
// }

const App = () => {
	return (
		<div>
			<Cat />
			<Cat />
		</div>
	);
};

const Cat = () => {
	return (
		<div>
			<div>hi</div>
		</div>
	);
};

export default App;
