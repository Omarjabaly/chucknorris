import React from 'react';

const Button = (props) => {
	
	return (

		<div>
			<h1 onClick={() => {props.getTheQuote(props.subject)}} className = 'w4 ma3 f4 link br3 ba bw1 ph3 pv2 mb2 dib mid-gray grow pointer'> 
				{props.subject} 
			</h1>
		</div>
	
	);
}

export default Button;
