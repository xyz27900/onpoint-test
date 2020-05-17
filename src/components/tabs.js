import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from './ui/slider';
import sliderThumbImage from '../images/ui/slider-thumb.png';

const sliderThumbSize = [43, 56];

const Wrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden
`;

const TabsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    transition: transform ${props => props.duration ? props.duration / 1000 : .2}s ease-out;
    transform: translateX(${props => props.translateX}%)
`;

const TabItem = styled.div`
    width: 100vw;
    height: 100vh;
    ${props => props.background && `background: ${props.background};`}
    background-repeat: no-repeat;
    background-size: cover;
`;

const sliderData = [ '1988', '2009', '2016' ];

const Tabs = ({ tabs, activeIndex = 0 }) => {
	const transitionDuration = 1000;
	const [active, setActive] = useState(activeIndex);

	return <Wrapper>
		<Slider items={sliderData} thumbImage={sliderThumbImage} thumbImageSize={sliderThumbSize} onChange={setActive} />
		<TabsWrapper translateX={active * - 100 / tabs.length} duration={transitionDuration}>
			{
				tabs.map((tab, index) => <TabItem key={index} background={tab.background}>{tab.content}</TabItem>)
			}
		</TabsWrapper>
	</Wrapper>;
};

export default Tabs;

Tabs.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.shape({
		background: PropTypes.string,
		content: PropTypes.node
	})).isRequired,
	activeIndex: PropTypes.number
};