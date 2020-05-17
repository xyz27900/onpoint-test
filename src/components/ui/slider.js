import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts, animate } from '../helpers';

const sliderThumbStyles = ({ image, imageSize }) => `
	width: ${imageSize[0]}px;
	height: ${imageSize[1]}px;
	cursor: pointer;
	background-image: url(${image});
	background-repeat: no-repeat;
	background-size: cover;
`;

const SliderWrapper = styled.div`
	position: absolute;
	top: 682px;
	left: 192px;
	width: 640px;
	height: 12px;
	z-index: 8;
	&::before {
		content: ' ';
		display: block;
		width: 100%;
		height: 12px;
		background: ${colors.gray};
		opacity: .35;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		border-radius: 2px;
	}
	.range {
		-webkit-appearance: none;
		width: 100%;
		position: relative;
		top: 0;
		display: block;
		z-index: 3;
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

const Indicator = styled.div`
	display: block;
	height: 12px;
	background: ${colors.lightblue};
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	border-radius: 2px;
`;

const Values =  styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	top: -10px;
	margin: 0 -20px;
`;

const Value = styled.div`
	color: ${colors.white};
	font-size: 20px;
	font-family: ${fonts.gotham}
`;

const Slider = ({ items, thumbImage, thumbImageSize, onChange }) => {
	const range = 1000;
	const [value, setValue] = useState(0);
	const [breakpoints] = useState([...items.map((_, index) => range / items.length * index), range]);
	const [values] = useState([...items.map((_, index) => range / (items.length - 1) * index)]);
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
		getIntervalIndex(value, (n) => animate(value, values[n], setValue));
	};

	return <SliderWrapper image={thumbImage} imageSize={thumbImageSize}>
		<Indicator value={value} style={{ width: `${value / 10}%` }} />
		<input type="range" min={0} max={range} value={value} className="range" onChange={handleChange} onTouchEnd={handleTouchEnd} />
		<Values>{items.map((item, index) => <Value key={`value-${index}`}>{item}</Value>)}</Values>
	</SliderWrapper>;
};

export default Slider;

Slider.propTypes = {
	items: PropTypes.array,
	thumbImage: PropTypes.string,
	thumbImageSize: PropTypes.arrayOf(PropTypes.number),
	onChange: PropTypes.func
};