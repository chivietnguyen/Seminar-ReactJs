import React from "react";
import Content from "./Content";

export default function UseContextExample({ theme }) {
	return (
		<div>
			<Content theme={theme} />
		</div>
	);
}

// export default function UseContextExample() {
// 	return (
// 		<div>
// 			<Content />
// 		</div>
// 	);
// }
