const colors = {
	blue: '#0d319c',
	white: '#ffffff',
	orange: '#f78b1f',
	lightblue: '#d1eaff',
	gray: '#888899'
};

const fonts = {
	gotham: '\'Gotham Pro\', sans-serif',
	lato: '\'LatoRegular\', sans-serif'
};

const animate = (from, to, callback, speed = 25) => {
	let value = from;
	const frame = () => {
		if (!pointReached(from, to, value)) {
			const distance = Math.abs(value - to);
			value = parseInt(value) + (value > to ? -1 : 1) * (distance >= speed ? speed : distance);
			callback(value);
			window.requestAnimationFrame(frame);
		}
	};
	window.requestAnimationFrame(frame);
};

const pointReached = (from, to, current) => from > to ? current <= to : current >= to;

export {
	colors,
	fonts,
	animate
};