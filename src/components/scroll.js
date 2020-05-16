import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollDownButton from '../components/ui/scrollDownButton';
import Pagination from './ui/pagination';

const SlideWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	transition: transform 1s ease-out;
	transform: translateY(${props => props.shift ? props.shift : 0}px);
`;

const Slide = styled.section`
	position: relative;
	top: ${props => props.top ? props.top : 0}px;
	width: 100vw;
	height: 100vh;
`;

const Scroll = ({ slides, currentIndex = 0, scrollSensivity = 65 }) => {
	const parallaxSpeed = 0.15;
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
		<Pagination count={slides.length} active={active} onItemClick={setActive} />
		{
			slides
				.reduce(($, row) => row.map((_, i) => [...($[i] || []), row[i]]), [])
				.map((layer, layerIndex) => (
					<SlideWrapper
						key={`slide-wrapper-${layerIndex}`}
						shift={(1 + parallaxSpeed * layerIndex) * active * - 768}
						onTouchStart={handleTouchStart}
						onTouchEnd={handleTouchEnd}>
						{
							layer.map((slide, slideIndex) => slide &&
								<Slide
									key={`slide-${slideIndex}`}
									top={115 * slideIndex * (slideIndex && layerIndex)}>{slide}</Slide>) // TODO Fix '115' - it shoul be a math expression
						}
					</SlideWrapper>
				))
		}
		<ScrollDownButton isVisible={active < slides.length - 1} onClick={slideDown} />
	</Fragment>;
};

export default Scroll;

Scroll.propTypes = {
	slides: PropTypes.arrayOf(PropTypes.node),
	currentIndex: PropTypes.number,
	scrollSensivity: PropTypes.number
};