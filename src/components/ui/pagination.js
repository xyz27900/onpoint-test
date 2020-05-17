import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../helpers/utils';

const Nav = styled.nav`
    position: fixed;
    width: 13px;
    height: 54px;
    bottom: 362px;
    right: 27px;
    display: flex;
    flex-direction: column;
	justify-content: space-between;
	z-index: 9;
`;

const NavItem = styled.div`
	width: 13px;
	height: 13px;
	border-radius: 50%;
	background: ${props => props.active ? colors.orange : colors.white};
`;

const Pagination = ({ count, active, onItemClick }) => (
	<Nav>
		{Array(count).fill(null).map((item, index) => <NavItem key={`nav-item-${index}`} onClick={() => onItemClick(index)} active={index === active} />)}
	</Nav>
);

export default Pagination;

Pagination.propTypes = {
	count: PropTypes.number,
	active: PropTypes.number,
	onItemClick: PropTypes.func
};