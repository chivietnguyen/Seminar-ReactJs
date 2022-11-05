import { useContext, createContext, useState } from "react";
import "./App.css";
import PropsExample from "./components/PropsExample/PropsExample";
import UseContextExample from "./components/UseContextExample/UseContextExample";
import UseEffectExample from "./components/UseEffectExample/UseEffectExample";
import UseLayoutEffectExample from "./components/UseLayoutEffectExample/UseLayoutEffectExample";
import UseRefExample from "./components/UseRefExample/UseRefExample";
import UseStateExample from "./components/UseStateExample/UseStateExample";

export const ThemeContext = createContext();

function App() {
	const [isShow, setIsShow] = useState(false);

	// ---  useContext example --- //
	const [theme, setTheme] = useState("black");

	const toggleTheme = () => {
		setTheme(theme === "black" ? "red" : "black");
	};
	// ---  useContext example --- //

	return (
		<div className="App">
			<h1 className="title">Welcome to our Seminar!</h1>

			{/* PropsExample */}
			{/* <PropsExample name="Việt" age="21" />
			<PropsExample name="Đạt" age="22" />
			<PropsExample name="Hoàng" age="24" /> */}

			{/* useState example */}
			{/* <UseStateExample name="Viet" /> */}

			{/* useEffect example */}
			{/* <button onClick={() => setIsShow(!isShow)}>Toggle</button>
			{isShow && <UseEffectExample />} */}

			{/* useLayoutEffect example */}
			{/* <UseLayoutEffectExample /> */}

			{/* useContext example */}
			{/* <div>
				<button onClick={toggleTheme}>Toggle Theme</button>
				<UseContextExample theme={theme} />
			</div> */}

			{/* <ThemeContext.Provider value={theme}>
				<div>
					<button onClick={toggleTheme}>Toggle Theme</button>
					<UseContextExample />
				</div>
			</ThemeContext.Provider> */}

			{/* useRef */}
			<UseRefExample />
		</div>
	);
}

export default App;
