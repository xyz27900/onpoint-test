import React from 'react';
import PropTypes from 'prop-types';
import { colors, fonts } from '../helpers/utils';
import { Layer } from '../helpers/elements';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

const Wrapper = styled(Layer)`
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to bottom, ${colors.darkblue}, ${colors.blue});
	padding: 100px;
`;

const Text = styled.p`
	font-weight: 300;
	text-align: center;
	line-height: 1.5;
	font-size: 36px;
	font-family: ${fonts.gotham};
	color: ${colors.white};
	animation: ${blink} 3s ease-in-out infinite;
`;

const Placeholder = ({ children }) => <Wrapper><Text>{children}</Text></Wrapper>;

export default Placeholder;

Placeholder.propTypes = { children: PropTypes.node };