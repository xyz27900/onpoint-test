import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import scrollDownImage from '../../images/ui/scroll-down-button.png';

const NextButton = styled.button`
	position: fixed;
	bottom: 0;
	display: inline-block;
	width: 100%;
	vertical-align: bottom
`;

const ScrollDownButton = ({ onClick }) => <NextButton onClick={onClick}><img src={scrollDownImage} /></NextButton>;

export default ScrollDownButton;

ScrollDownButton.propTypes = { onClick: PropTypes.func };