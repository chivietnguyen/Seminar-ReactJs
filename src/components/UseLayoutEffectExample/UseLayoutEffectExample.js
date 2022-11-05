import React, { useState, useEffect, useLayoutEffect } from "react";

export default function UseLayoutEffectExample() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (count > 3) {
			setCount(0);
		}
	});

	const handleRun = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>This is useLayoutEffect example</h1>

			<h2>{count}</h2>
			<button onClick={handleRun}>Run</button>
		</div>
	);
}
