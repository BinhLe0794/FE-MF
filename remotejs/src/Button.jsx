import { useState } from 'react';
import './Button.css';
function Button() {
	const [count, setCount] = useState(0);

	return (
		<div className='card'>
			<button className='buttonCss' onClick={() => setCount(count => count + 1)}>
				Button from remote app {count} from FE-MF
			</button>
		</div>
	);
}

export default Button;
