const colors = {
	darkblue: '#081d5e',
	blue: '#0d319c',
	white: '#ffffff',
	orange: '#f78b1f',
	lightblue: '#d1eaff',
	gray: '#888899'
};

const fonts = {
	gotham: '\'Gotham Pro\', sans-serif',
	gothamLight: '\'Gotham Pro Light\', sans-serif',
	lato: '\'Lato Regular\', sans-serif'
};

const animate = (from, to, callback, speed = 10) => {
	let value = from;
	const frame = () => {
		if (!pointReached(from, to, value)) {
			const distance = Math.abs(value - to);
			value = parseInt(value) + (value > to ? -1 : 1) *
				Math.ceil((distance >= speed ? speed : distance)  * timingFunction(Math.abs((value - to) / (from - to))));
			callback(value);
			window.requestAnimationFrame(frame);
		}
	};
	window.requestAnimationFrame(frame);
};

const pointReached = (from, to, current) => from > to ? current <= to : current >= to;

const timingFunction = x => x * (2 - x);

export {
	colors,
	fonts,
	animate
};