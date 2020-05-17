import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import scrollDownImage from '../../images/ui/scroll-down-button.png';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const fadeOut = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
`;

const NextButton = styled.button`
	position: fixed;
	bottom: 0;
	display: block;
	line-height: 0;
	width: 100%;
	text-align: center;
	animation: ${props => props.visible ? fadeIn : fadeOut} .5s ease-out;
`;

const Img = styled.img`
	display: inline-block;
`;

const ScrollDownButton = ({ isVisible = true, onClick }) => {
	const [shouldRender, setRenderState] = useState(isVisible);
	const handleAnimationEnd = () => {
		!isVisible && setRenderState(false);
	};

	useEffect(() => {
		isVisible && setRenderState(true);
	}, [isVisible]);

	return shouldRender &&
		<NextButton
			onClick={onClick}
			visible={isVisible}
			onAnimationEnd={handleAnimationEnd}>
			<Img src={scrollDownImage} alt="Листайте вниз" accessKey="W" />
		</NextButton>;
};

export default ScrollDownButton;

ScrollDownButton.propTypes = {
	isVisible: PropTypes.bool,
	onClick: PropTypes.func
};