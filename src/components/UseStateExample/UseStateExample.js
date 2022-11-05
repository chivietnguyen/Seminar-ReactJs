import React, { useState } from "react";
import styles from "./UseStateExample.module.css";

// const total = () => {
// 	return 1 + 2 + 3;
// };

// Ứng dụng đếm số (Counter Application)
export default function UseStateExample({ name }) {
	const [counter, setCounter] = useState(5);

	const handleIncrease = () => {
		setCounter(counter + 1);

		// setCounter(counter + 1);
		// setCounter(counter + 1);
		// setCounter(counter + 1);

		// setCounter((prevCounter) => prevCounter + 1);
		// setCounter((prevCounter) => prevCounter + 1);
		// setCounter((prevCounter) => prevCounter + 1);
	};

	const handleDecrease = () => {
		setCounter(counter - 1);
	};

	console.log("re-render");

	return (
		<div>
			<h1>Hello everyone, this is Counter Application using useState</h1>
			<p>My name is {name}</p>

			<div className={styles.wrapper}>
				<button onClick={handleIncrease}>Increase</button>
				<h2 className={styles.content}>The counter: {counter}</h2>
				<button onClick={handleDecrease}>Decrease</button>
			</div>
		</div>
	);
}

// Ứng dụng Update Info (Update Info Application)
// export default function UseStateExample() {
// 	const [info, setInfo] = useState({
// 		name: "Đạt",
// 		age: 21,
// 		position: "Tổng bí thư",
// 	});

// 	const handleUpdate = () => {
// 		setInfo({ name: "Việt" });
// 		// setInfo({ ...info, name: "Việt" });
// 	};

// 	return (
// 		<div>
// 			<h1>Hello everyone, this is Update Info Application using useState</h1>

// 			<div className={styles.wrapper}>
// 				<h2 className={styles.content}>The info: {JSON.stringify(info)}</h2>
// 				<button onClick={handleUpdate}>Update Info</button>
// 			</div>
// 		</div>
// 	);
// }
