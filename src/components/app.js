import React, { Fragment } from 'react';
import Scroll from './scroll';
import Tabs from './tabs';
import slide_1_background from '../images/backgrounds/slide-1.png';
import slide_2_background from '../images/backgrounds/slide-2.png';
import slide_2_particles from '../images/particles/slide-2.png';
import slide_3_background from '../images/backgrounds/slide-3.png';
import slide_3_1_background from '../images/particles/slide-3-1.png';
import slide_3_2_background from '../images/particles/slide-3-2.png';
import slide_3_3_background from '../images/particles/slide-3-3.png';
import slide_3_1_content from '../images/content/slide-3-1.png';
import slide_3_2_content from '../images/content/slide-3-2.png';
import slide_3_3_content from '../images/content/slide-3-3.png';
import styled from 'styled-components';
import PulseCircle from './ui/pulseCircle';
import { colors, fonts } from './helpers';

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

const textBlocksData = [
	[
		{
			x: 73,
			y: 144,
			color: colors.blue,
			fontFamily: fonts.gotham,
			fontSize: '50px',
			fontTracking: -.01,
			text: 'Всегда ли цели терапии СД2 на поверхности?'
		},
		{
			x: 625,
			y: 273,
			color: colors.blue,
			fontFamily: fonts.lato,
			fontSize: '20px',
			fontTracking: .01,
			text: 'Цель по HbA1c'
		},
		{
			x: 223,
			y: 397,
			color: colors.blue,
			fontFamily: fonts.lato,
			fontSize: '20px',
			fontTracking: .01,
			text: 'Гипогликемия'
		},
		{
			x: 369,
			y: 507,
			color: colors.blue,
			fontFamily: fonts.lato,
			fontSize: '20px',
			fontTracking: .01,
			text: 'Осложнения СД'
		},
		{
			x: 791,
			y: 487,
			color: colors.blue,
			fontFamily: fonts.lato,
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
			color: colors.white,
			fontFamily: fonts.gotham,
			fontSize: '50px',
			textAlign: 'center',
			fontTracking: -.01,
			fontWeight: 300,
			text: 'Основа терапии — патогенез СД2'
		}
	],
	[
		[
			{
				x: 84,
				y: 110,
				color: colors.white,
				fontFamily: fonts.gotham,
				fontSize: '30px',
				fontTracking: -.01,
				text: 'Звенья патогенеза СД2'
			},
			{
				x: 462,
				y: 478,
				width: 138,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				textAlign: 'center',
				fontTracking: -.01,
				text: 'Гипергликемия'
			},
			{
				x: 462,
				y: 240,
				width: 138,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '23px',
				textAlign: 'center',
				fontTracking: -.01,
				text: 'β-клетки'
			},
			{
				x: 737,
				y: 404,
				width: 76,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '23px',
				fontTracking: -.01,
				text: 'Печень'
			},
			{
				x: 245,
				y: 404,
				width: 87,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '23px',
				fontTracking: -.01,
				text: 'Мышцы'
			},
			{
				x: 462,
				y: 270,
				width: 138,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '66px',
				textAlign: 'center',
				fontTracking: -.01,
				fontWeight: 'bold',
				text: 'β'
			},
			{
				x: 462,
				y: 200,
				width: 138,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				textAlign: 'center',
				fontTracking: -.01,
				fontWeight: 'bold',
				text: '1'
			},
			{
				x: 245,
				y: 364,
				width: 87,
				color: colors.white,
				fontFamily: fonts.lato,
				textAlign: 'center',
				fontSize: '36px',
				fontTracking: -.01,
				fontWeight: 'bold',
				text: '2'
			},
			{
				x: 737,
				y: 364,
				width: 76,
				color: colors.white,
				fontFamily: fonts.lato,
				textAlign: 'center',
				fontSize: '36px',
				fontTracking: -.01,
				fontWeight: 'bold',
				text: '3'
			},
		],
		[
			{
				x: 84,
				y: 110,
				color: colors.white,
				fontFamily: fonts.gotham,
				fontSize: '30px',
				fontTracking: -.01,
				text: 'Смертельный октет'
			},
			{
				x: 438,
				y: 368,
				width: 172,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '25px',
				textAlign: 'center',
				fontTracking: -.01,
				text: 'Гипергликемия'
			},
			{
				x: 438,
				y: 205,
				width: 172,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '66px',
				textAlign: 'center',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: 'β'
			},
			{
				x: 438,
				y: 150,
				width: 172,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				textAlign: 'center',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '1'
			},
			{
				x: 438,
				y: 186,
				width: 172,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				textAlign: 'center',
				fontTracking: -.01,
				text: 'β-клетки'
			},
			{
				x: 358,
				y: 225,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '2'
			},
			{
				x: 666,
				y: 225,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '3'
			},
			{
				x: 190,
				y: 223,
				width: 137,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				textAlign: 'right',
				fontTracking: -.01,
				text: 'Инкретиновый эффект'
			},
			{
				x: 190,
				y: 223,
				width: 137,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				textAlign: 'right',
				fontTracking: -.01,
				text: 'Инкретиновый эффект'
			},
			{
				x: 721,
				y: 223,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				fontTracking: -.01,
				text: <Fragment>Дефект<br />α-клеток</Fragment>
			},
			{
				x: 200,
				y: 370,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '8'
			},
			{
				x: 826,
				y: 370,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '4'
			},
			{
				x: 438,
				y: 550,
				width: 172,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				textAlign: 'center',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '6'
			},
			{
				x: 358,
				y: 550,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '7'
			},
			{
				x: 666,
				y: 550,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '5'
			},
			{
				x: 438,
				y: 590,
				width: 172,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				textAlign: 'center',
				fontTracking: -.01,
				text: 'Печень'
			},
			{
				x: 638,
				y: 590,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				fontTracking: -.01,
				text: 'Мышцы'
			},
			{
				x: 324,
				y: 590,
				width: 84,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				textAlign: 'center',
				fontTracking: -.01,
				text: 'Головной мозг'
			},
			{
				x: 163,
				y: 412,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				fontTracking: -.01,
				text: 'Почки'
			},
			{
				x: 826,
				y: 412,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				fontTracking: -.01,
				text: <Fragment>Жировые<br />клетки</Fragment>
			},
		],
		[
			{
				x: 84,
				y: 110,
				color: colors.white,
				fontFamily: fonts.gotham,
				fontSize: '30px',
				fontTracking: -.01,
				text: 'Звенья патогенеза СД2'
			},
			{
				x: 438,
				y: 175,
				width: 172,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '66px',
				textAlign: 'center',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: 'β'
			},
			{
				x: 438,
				y: 150,
				width: 172,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '25px',
				textAlign: 'center',
				fontTracking: -.01,
				text: 'β-клетки'
			},
			{
				x: 443,
				y: 145,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '1'
			},
			{
				x: 486,
				y: 338,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '2'
			},
			{
				x: 542,
				y: 338,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '3'
			},
			{
				x: 792,
				y: 552,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '4'
			},
			{
				x: 792,
				y: 467,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '5'
			},
			{
				x: 792,
				y: 383,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '6'
			},
			{
				x: 792,
				y: 228,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				fontTracking: -.01,
				text: '7'
			},
			{
				x: 222,
				y: 220,
				width: 40,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				textAlign: 'right',
				fontTracking: -.01,
				text: '8'
			},
			{
				x: 222,
				y: 316,
				width: 40,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				textAlign: 'right',
				fontTracking: -.01,
				text: '9'
			},
			{
				x: 222,
				y: 455,
				width: 40,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				textAlign: 'right',
				fontTracking: -.01,
				text: '10'
			},
			{
				x: 52,
				y: 260,
				width: 210,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				textAlign: 'right',
				fontTracking: -.01,
				text: <Fragment>Микрофлора<br />кишечника</Fragment>
			},
			{
				x: 52,
				y: 356,
				width: 210,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				textAlign: 'right',
				fontTracking: -.01,
				text: <Fragment>Нарушение иммунной<br />регуляции/воспаление</Fragment>
			},
			{
				x: 52,
				y: 495,
				width: 210,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				textAlign: 'right',
				fontTracking: -.01,
				text: 'Желудок'
			},
			{
				x: 438,
				y: 487,
				width: 172,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '25px',
				textAlign: 'center',
				fontTracking: -.01,
				text: 'Гипергликемия'
			},
			{
				x: 426,
				y: 555,
				width: 60,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '36px',
				fontWeight: 'bold',
				textAlign: 'right',
				fontTracking: -.01,
				text: '11'
			},
			{
				x: 426,
				y: 595,
				width: 60,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				textAlign: 'right',
				fontTracking: -.01,
				text: 'Почки'
			},
			{
				x: 792,
				y: 268,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				fontTracking: -.01,
				text: 'Головной мозг'
			},
			{
				x: 792,
				y: 423,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				fontTracking: -.01,
				text: 'Печень'
			},
			{
				x: 792,
				y: 507,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				fontTracking: -.01,
				text: 'Мышцы'
			},
			{
				x: 792,
				y: 592,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				fontTracking: -.01,
				text: 'Жировые клетки'
			},
			{
				x: 744,
				y: 350,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '15px',
				fontTracking: -.01,
				text: 'Инсулинорезистентность'
			},
			{
				x: 543,
				y: 429,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '15px',
				fontTracking: -.01,
				text: '↑ глюкагон'
			},
			{
				x: 542,
				y: 378,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				fontTracking: -.01,
				text: 'Дефект α-клеток'
			},
			{
				x: 345,
				y: 374,
				width: 160,
				color: colors.white,
				fontFamily: fonts.lato,
				fontSize: '20px',
				textAlign: 'right',
				fontTracking: -.01,
				text: <Fragment>↓ инкретинового<br />эффекта</Fragment>
			},
		]
	]
];

const tabsData = [
	{
		background: `url(${slide_3_1_background})`,
		content: <Layer image={slide_3_1_content}>
			{textBlocksData[2][0].map((block, index) => <TextBlock key={`text-block-${index}`} {...block}>{block.text}</TextBlock>)}
		</Layer>
	},
	{
		background: `url(${slide_3_2_background})`,
		content: <Layer image={slide_3_2_content}>
			{textBlocksData[2][1].map((block, index) => <TextBlock key={`text-block-${index}`} {...block}>{block.text}</TextBlock>)}
		</Layer>
	},
	{
		background: `url(${slide_3_3_background})`,
		content: <Layer image={slide_3_3_content}>
			{textBlocksData[2][2].map((block, index) => <TextBlock key={`text-block-${index}`} {...block}>{block.text}</TextBlock>)}
		</Layer>
	}
];

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