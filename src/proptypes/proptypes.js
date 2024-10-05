import PropTypes from 'prop-types';
import React from 'react';

// Component
export default class PropTypesExa extends React.Component{
	render(){
		return(
				<div>
				
					{/* printing all props */}
					<h1>
						{this.props.arrayProp}
						<br />

						{this.props.stringProp}
						<br />

						{this.props.numberProp}
						<br />

						{this.props.boolProp}
						<br />
					</h1>
				</div>
			);
	}
}

// Validating prop types
PropTypesExa.propTypes = {
	arrayProp: PropTypes.array,
	stringProp: PropTypes.string,
	numberProp: PropTypes.number,
	boolProp: PropTypes.bool,
}

// Creating default props
PropTypesExa.defaultProps = {
	arrayProp: ['Ram', 'Shyam', 'Raghav'],
	stringProp: "gh",
	numberProp: "10",  // this is number and we set string
	boolProp: true,
}

