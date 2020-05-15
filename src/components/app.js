import React from 'react';
import Tabs from './tabs';
import slide_3_1 from '../images/particles/slide-3-1.png';
import slide_3_2 from '../images/particles/slide-3-2.png';
import slide_3_3 from '../images/particles/slide-3-3.png';

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

const App = () => {
	return <Tabs tabs={tabsData} />;
};

export default App;