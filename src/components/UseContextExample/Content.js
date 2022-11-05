import React, { useContext } from "react";
import { ThemeContext } from "../../App";

export default function Content({ theme }) {
	return (
		<div>
			<h1 style={{ color: theme }}>This is useContext Example</h1>
		</div>
	);
}

// export default function Content() {
// 	const theme = useContext(ThemeContext);

// 	return (
// 		<div>
// 			<h1 style={{ color: theme }}>This is useContext Example</h1>
// 		</div>
// 	);
// }
