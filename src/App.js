import "./App.css";
import LandPage from "./pages/land-page/LandPage";
import HomePage from "./pages/home-page/HomePage";

import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<LandPage />
				</Route>
				<Route path="/home">
					<HomePage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
