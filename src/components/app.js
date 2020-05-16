import React from 'react';
import Scroll from './scroll';
import Tabs from './tabs';
import slide_1_background from '../images/backgrounds/slide-1.png';
import slide_2_background from '../images/backgrounds/slide-2.png';
import slide_2_particles from '../images/particles/slide-2.png';
import slide_3_background from '../images/backgrounds/slide-3.png';
import slide_3_1 from '../images/particles/slide-3-1.png';
import slide_3_2 from '../images/particles/slide-3-2.png';
import slide_3_3 from '../images/particles/slide-3-3.png';
import styled from 'styled-components';
import PulseCircle from './ui/pulseCircle';

const tabsData = [
	{
		background: `url(${slide_3_1})`,
		content: 'One'
	},
	{
		background: `url(${slide_3_2})`,
		content: 'Two'
	},
	{
		background: `url(${slide_3_3})`,
		content: 'Three'
	}
];

const Layer = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	${props => props.image && `
		background-image: url(${props.image});
		background-size: cover;
		background-repeat: no-repeat;`}
`;

const circlesData = [
	{
		x: 588,
		y: 287,
		min: 2,
		max: 26.25
	},
	{
		x: 287,
		y: 441,
		min: 2,
		max: 13.5
	},
	{
		x: 487,
		y: 545,
		min: 2,
		max: 7.5
	},
	{
		x: 829,
		y: 525,
		min: 2,
		max: 7.5
	}
];

const GothamPro = '\'Gotham Pro\', sans-serif';
const LatoRegular = '\'LatoRegular\', sans-serif';
const blueColor = '#0d319c';
const whiteColor = '#ffffff';

const textBlocksData = [
	[
		{
			x: 73,
			y: 144,
			color: blueColor,
			fontFamily: GothamPro,
			fontSize: '50px',
			fontTracking: -.01,
			text: 'Всегда ли цели терапии СД2 на поверхности?'
		},
		{
			x: 625,
			y: 273,
			color: blueColor,
			fontFamily: LatoRegular,
			fontSize: '20px',
			fontTracking: .01,
			text: 'Цель по HbA1c'
		},
		{
			x: 223,
			y: 397,
			color: blueColor,
			fontFamily: LatoRegular,
			fontSize: '20px',
			fontTracking: .01,
			text: 'Гипогликемия'
		},
		{
			x: 369,
			y: 507,
			color: blueColor,
			fontFamily: LatoRegular,
			fontSize: '20px',
			fontTracking: .01,
			text: 'Осложнения СД'
		},
		{
			x: 791,
			y: 487,
			color: blueColor,
			fontFamily: LatoRegular,
			fontSize: '20px',
			fontTracking: .01,
			text: 'СС риски'
		}
	],
	[
		{
			x: 277,
			y: 255,
			width: 470,
			color: whiteColor,
			fontFamily: GothamPro,
			fontSize: '50px',
			textAlign: 'center',
			fontTracking: -.01,
			fontWeight: 300,
			text: 'Основа терапии — патогенез СД2'
		}
	]
];

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

const App = () => {
	return <Scroll slides={[
		[
			<Layer key="slide-1-background" image={slide_1_background} />,
			<Layer key="slide-1-circles">
				{textBlocksData[0].map((block, index) => <TextBlock key={`text-block-${index}`} {...block}>{block.text}</TextBlock>)}
				{circlesData.map((circle, index) => <PulseCircle key={`circle-${index}`} {...circle} />)}
			</Layer>
		],
		[
			<Layer key="slide-2-background" image={slide_2_background} />,
			<Layer key="slide-2-particles" image={slide_2_particles} >
				{textBlocksData[1].map((block, index) => <TextBlock key={`text-block-${index}`} {...block}>{block.text}</TextBlock>)}
			</Layer>
		],
		[
			<Layer key="slide-3-background" image={slide_3_background} />,
			<Tabs key="slide-3-tabs" tabs={tabsData} />
		]
	]} />;
};

export default App;