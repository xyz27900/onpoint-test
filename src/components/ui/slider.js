import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const sliderThumbStyles = ({ image, width, height }) => `
	width: 43px;
	height: 56px;
	cursor: pointer;
	background-image: url(${image});
	background-repeat: no-repeat;
	background-size: cover;
`;

const SliderWrapper = styled.div`
	position: absolute;
	bottom: 74px;
	left: 192px;
	width: 640px;
	height: 12px;
	z-index: 8;
	&::after {
		content: ' ';
		display: block;
		width: 100%;
		height: 12px;
		background: #aaaaaa;
		opacity: .5;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.range {
		-webkit-appearance: none;
		width: 100%;
		position: relative;
		top: 0;
		display: block;
		z-index: 2;
		transform: translateY(calc(-50% + 6px));

		&::-webkit-slider-runnable-track {
			-webkit-appearance: none;
			appearance: none;
			margin: 0 -20px;
		}

		&::-webkit-slider-thumb {
			-webkit-appearance: none;
			appearance: none;
			${props => sliderThumbStyles(props)};
		}

		&::-moz-range-thumb {
			${props => sliderThumbStyles(props)}
		}
	}
`;

const Slider = ({ items, thumbImage, onChange }) => {
	const range = 1000;
	const [value, setValue] = useState(0);
	const [breakpoints] = useState([...items.map((_, index) => range / items.length * index), range]);
	const [values] = useState([...items.map((_, index) => range / (items.length - 1) * index), range]);
	const getIntervalIndex = (value, callback) => {
		for (let i = 0; i < breakpoints.length - 1; i++) {
			if (value >= 0 && value > breakpoints[i] && value <= breakpoints[i + 1]) {
				callback(i);
				break;
			}
		}
	};
	const handleChange = (e) => {
		const value = e.target.value;
		setValue(value);
		getIntervalIndex(value, onChange);
	};
	const handleTouchEnd = () => {
		getIntervalIndex(value, (n) => setValue(values[n]));
	};

	return <SliderWrapper image={thumbImage}>
		<input type="range" min={0} max={range} value={value} className="range" onChange={handleChange} onTouchEnd={handleTouchEnd} />
	</SliderWrapper>;
};

export default Slider;

Slider.propTypes = {
	items: PropTypes.array,
	thumbImage: PropTypes.string,
	onChange: PropTypes.func
};