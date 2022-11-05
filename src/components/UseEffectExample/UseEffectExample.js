import axios from "axios";
import React, { useEffect, useState } from "react";

// Chung
// Callback luôn được gọi sau khi component mounted (cả 3 trường hợp)

// TH1: Không có dependencies
// Riêng
// Gọi callback mỗi khi component re-render
// Gọi callback sau khi component thêm element vào DOM

// export default function UseEffectExample() {
// 	const [title, setTitle] = useState("");

// 	useEffect(() => {
// 		console.log("Mounted");
// 		document.title = title;
// 	});

// 	return (
// 		<div>
// 			<h1>This is UseEffectExample</h1>

// 			<input
// 				type="text"
// 				value={title}
// 				onChange={(e) => setTitle(e.target.value)}
// 			/>

// 			{console.log("Render")}
// 		</div>
// 	);
// }

// export default function UseEffectExample() {
// 	const [title, setTitle] = useState("");
// 	const [posts, setPosts] = useState([]);

// 	useEffect(() => {
// 		axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
// 			setPosts(res.data)
// 		);
// 	});

// 	return (
// 		<div>
// 			<h1>This is UseEffectExample</h1>

// 			<input
// 				type="text"
// 				value={title}
// 				onChange={(e) => setTitle(e.target.value)}
// 			/>

// 			{posts.map((post) => (
// 				<p key={post.id}>{post.title}</p>
// 			))}
// 		</div>
// 	);
// }

// TH2: Dependencies là một mảng rỗng
// Chỉ gọi callback một lần sau khi component được mount

// export default function UseEffectExample() {
// 	const [title, setTitle] = useState("");
// 	const [posts, setPosts] = useState([]);

// 	useEffect(() => {
// 		axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
// 			setPosts(res.data)
// 		);
// 	}, []);

// 	return (
// 		<div>
// 			<h1>This is UseEffectExample</h1>

// 			<input
// 				type="text"
// 				value={title}
// 				onChange={(e) => setTitle(e.target.value)}
// 			/>

// 			{posts.map((post) => (
// 				<p key={post.id}>{post.title}</p>
// 			))}
// 		</div>
// 	);
// }

// TH3: Có dependencies
// Callback sẽ được gọi lại mỗi khi dependencies thay đổi
// const tabs = ["posts", "albums"];

// export default function UseEffectExample() {
// 	const [title, setTitle] = useState("");
// 	const [posts, setPosts] = useState([]);
// 	const [type, setType] = useState("posts");

// 	useEffect(() => {
// 		axios(`https://jsonplaceholder.typicode.com/${type}`).then((res) =>
// 			setPosts(res.data)
// 		);
// 	}, [type]);

// 	return (
// 		<div>
// 			<h1>This is UseEffectExample</h1>

// 			{tabs.map((tab) => (
// 				<button key={tab} onClick={() => setType(tab)}>
// 					{tab}
// 				</button>
// 			))}
// 			<input
// 				type="text"
// 				value={title}
// 				onChange={(e) => setTitle(e.target.value)}
// 			/>

// 			{posts.map((post) => (
// 				<p key={post.id}>{post.title}</p>
// 			))}
// 		</div>
// 	);
// }

// Clean up function
export default function UseEffectExample() {
	const [countdown, setCountdown] = useState(180);

	useEffect(() => {
		const timerId = setInterval(() => {
			setCountdown(countdown - 1);

			console.log("Count down ...", countdown);
		}, 1000);

		// return () => clearInterval(timerId);
	}, []);

	return (
		<div>
			<h1>This is UseEffectExample</h1>

			<p>{countdown}</p>
		</div>
	);
}
