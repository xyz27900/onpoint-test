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

const App = () => {
	return <Scroll slides={[
		[
			<Layer key="slide-1-background" image={slide_1_background} />,
			<Layer key="slide-1-circles">
				{circlesData.map((circle, index) => <PulseCircle key={`circle-${index}`} {...circle} />)}
			</Layer>
		],
		[
			<Layer key="slide-2-background" image={slide_2_background} />,
			<Layer key="slide-2-particles" image={slide_2_particles} />
		],
		[
			<Layer key="slide-3-background" image={slide_3_background} />,
			<Tabs key="slide-3-tabs" tabs={tabsData} />
		]
	]} />;
};

export default App;