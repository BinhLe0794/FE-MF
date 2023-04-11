import { useState } from 'react';

function Button() {
	const [count, setCount] = useState(0);

	return (
		<div className='card'>
			<button onClick={() => setCount(count => count + 5)}>
				Button from remote app {count} from 5003
			</button>
		</div>
	);
}

export default Button;
