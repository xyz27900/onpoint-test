import { useRef, useLayoutEffect, useEffect, useState, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

// eslint-disable-next-line no-undef
const useIsomorphicLayoutEffect = global.window ? useLayoutEffect : useEffect; // In case of SSR

const useResizeObserver = () => {
	const [entry, setEntry] = useState({});
	const [element, setElement] = useState(null);
	const observer = useRef(null);
	const observe = useCallback(() => {
		observer.current = new ResizeObserver(([entry]) => setEntry(entry));
		element && observer.current.observe(element);
	}, [element]);
	const disconnect = useCallback(() => observer.current && observer.current.disconnect(), []);

	useIsomorphicLayoutEffect(() => {
		observe();
		return () => disconnect();
	}, [disconnect, observe]);

	return [setElement, entry];
};

export default useResizeObserver;