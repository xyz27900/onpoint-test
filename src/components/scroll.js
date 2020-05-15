import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollDownButton from '../components/ui/scrollDownButton';

const SlideWrapper = styled.div`
	transition: transform 1s ease-out;
	transform: translateY(${props => props.shift ? props.shift : 0}%);
`;

const Slide = styled.section`
	position: relative;
	width: 100%;
	height: 100%;
`;

const Scroll = ({ slides, currentIndex = 0, scrollSensivity = 65 }) => {
	const [active, setActive] = useState(currentIndex);
	const [startPoint, setStartPoint] = useState(null);
	const handleTouchStart = (e) => {
		setStartPoint(e.touches[0].clientY);
	};
	const handleTouchEnd = (e) => {
		const endPoint = e.changedTouches[0].clientY;
		const delta = endPoint - startPoint;

		if (Math.abs(delta) > scrollSensivity) {
			delta > 0 ? slideUp() : slideDown();
		}
	};
	const slideUp = () => {
		if (active > 0) {
			setActive(active - 1);
		}
	};
	const slideDown = () => {
		if (active < slides.length - 1) {
			setActive(active + 1);
		}
	};

	return <Fragment>
		<SlideWrapper shift={active * - 100 / slides.length} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
			{
				slides.map((slide, index) => <Slide key={`slide-${index}`}>{slide}</Slide>)
			}
		</SlideWrapper>
		<ScrollDownButton isVisible={active < slides.length - 1} onClick={slideDown} />
	</Fragment>;
};

export default Scroll;

Scroll.propTypes = {
	slides: PropTypes.arrayOf(PropTypes.node),
	currentIndex: PropTypes.number,
	scrollSensivity: PropTypes.number,
	onScroll: PropTypes.func
};