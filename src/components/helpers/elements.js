import styled from 'styled-components';

const Layer = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	${props => props.image && `
		background-image: url(${props.image});
		background-size: cover;
		background-repeat: no-repeat;`}
`;

const TextBlock = styled.div`
	position: absolute;
	top: ${props => props.y}px;
	left: ${props => props.x}px;
	width: ${props => props.width ? props.width + 'px' : 'auto'};
	color: ${props => props.color ? props.color : '#000000'};
	font-family: ${props => props.fontFamily? props.fontFamily : 'sans-serif'};
	font-size: ${props => props.fontSize? props.fontSize : '14pt'};
	font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
	line-height: 1.2;
	text-align: ${props => props.textAlign ? props.textAlign : 'left'};
	letter-spacing: ${props => props.fontTracking ? props.fontTracking + 'em' : 'normal'};
`;

export { Layer, TextBlock };