import React, { useEffect, useRef, useState } from "react";

// export default function UseRefExample() {
// 	const [count, setCount] = useState(60);

// 	let timerId;
// 	console.log(timerId);

// 	const handleStart = () => {
// 		timerId = setInterval(() => {
// 			setCount((prevCount) => prevCount - 1);
// 		}, 1000);

// 		console.log(timerId);
// 	};

// 	const handleStop = () => {
// 		clearInterval(timerId);

// 		console.log("Stop => ", timerId);
// 	};

// 	return (
// 		<>
// 			<h1>{count}</h1>
// 			<button onClick={handleStart}>Start</button>
// 			<button onClick={handleStop}>Stop</button>
// 		</>
// 	);
// }

export default function UseRefExample() {
	const inputRef = useRef();
	console.log(inputRef);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<>
			<input ref={inputRef} type="text" />
		</>
	);
}
