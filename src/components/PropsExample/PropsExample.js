import React from "react";

export default function PropsExample({ name, age }) {
	return (
		<div style={{ border: "1px solid grey" }}>
			<h1>Xin chào mình là {name}</h1>
			<h2>Năm nay mình {age} tuổi</h2>
		</div>
	);
}
