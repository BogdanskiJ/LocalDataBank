import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { MapProvinces } from "./features/maps/MapProvinces";
import { Navigation } from "./common/Navigation";
import { TeritorialUnit } from "./features/baseLocalData/teritorialUnitManyVariables/TeritorialUnit";
import { TeritorialUnitManyVariables } from "./features/baseLocalData/teritorialUnitManyVariables";

export const App = () => {
	return (
		<>
			<HashRouter>
				<Navigation />
				{/* <TeritorialUnit /> */}
				<Switch>
					<Route path="/maps/Poland">
						<TeritorialUnitManyVariables />
					</Route>
					<Route path="/maps/provinces/:name">
						<MapProvinces />
					</Route>
					<Route path="/">
						<Redirect to="/maps/Poland" />
					</Route>
				</Switch>
			</HashRouter>
		</>
	);
};

export default App;
