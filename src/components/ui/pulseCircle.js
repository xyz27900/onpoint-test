import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Svg = styled.svg`
	display: inline-block;
	position: absolute;
	top: ${props => props.y}px;
	left: ${props => props.x}px;
	transform: translateX(-50%) translateY(-50%);
`;

const circleAnimation = (min, max) => keyframes`
		from {
			r: ${min};
			stroke-opacity: 0;
			fill-opacity: .88;
		}

		to {
			r: ${max};
			stroke-opacity: 1;
			fill-opacity: 0;
		}
	`;

const AnimatedCircle = styled.circle`
	animation: ${props => circleAnimation(...props.radius)} ${props => props.id > 0 ? 2 : 0}s ${props => 2 / 3 * props.id}s ease-out infinite;
`;

const Circle = ({ id, x, y, radius, strokeWidth, stroke, fill, opacity }) => (
	<Fragment>
		<AnimatedCircle
			cx={x} cy={y}
			radius={radius.map(r => r - strokeWidth)}
			r={radius[1] - strokeWidth}
			delay={id}
			id={id}
			stroke={stroke ? Array.isArray(stroke) ? 'url(#stroke-gradient)' : stroke : 'none'}
			fillOpacity={opacity}
			fill={fill}
			strokeWidth={strokeWidth} />
	</Fragment>
);

const gradientColors = ['#de791b', '#cf1437'];
const fillColor = '#f78b1f';
const strokeGradientId = 'stroke-gradient';
const circlesOpacity = [.22, 0, 0, 0];

const PulseCircle = ({ x, y, min, max }) => {
	const circleProps = {
		x: 50,
		y: 50,
		radius: [min, max],
		stroke: `url(#${strokeGradientId})`,
		fill: fillColor,
		strokeWidth: 1
	};

	return <Svg x={x} y={y} width={100} height={100} viewBox={'0 0 100 100'}>
		<defs>
			<linearGradient id={strokeGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" stopColor={gradientColors[1]} />
				<stop offset="100%" stopColor={gradientColors[0]} />
			</linearGradient>
		</defs>
		{circlesOpacity.map((opacity, index) => <Circle key={`circle-${index}`} id={index} {...circleProps} opacity={opacity} />)}
	</Svg>;
};

export default PulseCircle;


Circle.propTypes = {
	id: PropTypes.number,
	x: PropTypes.number,
	y: PropTypes.number,
	radius: PropTypes.arrayOf(PropTypes.number),
	strokeWidth: PropTypes.number,
	stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
	fill: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
	opacity: PropTypes.number
};
PulseCircle.propTypes = {
	x: PropTypes.number,
	y: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number
};