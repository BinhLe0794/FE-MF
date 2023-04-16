import React from 'react';
import Nav from './components/Nav';

function App() {
	return (
		<React.Fragment>
			<div className='grid grid-cols-5'>
				<Nav />
				<main className='col-span-4 bg-red-400'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, facilis cumque? Neque
					libero unde, inventore totam rerum sapiente cum fugit nisi, eum optio repudiandae vero
					facilis, laboriosam quas minima obcaecati! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Exercitationem nihil eligendi voluptates laborum voluptatibus laudantium
					similique fugit aliquid perspiciatis! Voluptas dolor eius suscipit, saepe doloremque
					recusandae cum necessitatibus in assumenda. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Dolores perferendis unde magnam illum cupiditate, culpa fugit tenetur
					rem necessitatibus maiores assumenda ea, quisquam quam in sequi nihil mollitia cumque
					reiciendis.
				</main>
			</div>
		</React.Fragment>
	);
}

export default App;
