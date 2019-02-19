import React from 'react';

const Num = props => {
	return (
		<div>
			<div className="num">
				{props.num_1}
	    	</div>
			<div className="num">
				{props.num_2}
	    	</div>
			<div className="num">
				{props.num_3}
	    	</div>
			<div className="num">
				{props.num_4}
	    	</div>
			<div className="num">
				{props.num_5}
	    	</div>
	    </div>
	);
};

export {Num};