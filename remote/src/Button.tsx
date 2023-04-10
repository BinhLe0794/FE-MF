import { useState } from 'react';

function Button() {
	const [count, setCount] = useState(0);

	return (
		<div className='card'>
			<button onClick={() => setCount(count => count + 1)}>
				Button from remote app {count} from FE-MF
			</button>
		</div>
	);
}

export default Button;
