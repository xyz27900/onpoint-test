import { colors, fonts } from '../helpers/utils';
import { Layer } from '../helpers/elements';
import styled from 'styled-components';

const Placeholder = styled(Layer)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 36px;
	font-family: ${fonts.gotham};
	color: ${colors.white};
	background: ${colors.blue};
	padding: 100px;
	font-weight: 300;
	text-align: center;
	line-height: 1.5;
`;

export default Placeholder;