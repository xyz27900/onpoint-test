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
	display: inline-block;
	width: 100%;
	vertical-align: bottom;
	animation: ${props => props.visible ? fadeIn : fadeOut} 1s ease-out;
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
			<img src={scrollDownImage} />
		</NextButton>;
};

export default ScrollDownButton;

ScrollDownButton.propTypes = {
	isVisible: PropTypes.bool,
	onClick: PropTypes.func
};