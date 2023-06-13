import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import teritorialUnitReducer from "./features/baseLocalData/teritorialUnitManyVariables/teritorialUnitManyVariablesSlice";
import RegionAndProvincesMapsReducer from "./features/maps/mapsSlice";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
	reducer: {
		teritorialUnit: teritorialUnitReducer,
		RegionAndProvincesMaps: RegionAndProvincesMapsReducer,
		// movieList: movieListReducer,
		// movieDetails: movieDetailsReducer,
		// peopleList: peopleListReducer,
		// peopleDetails: peopleDetailsReducer,
		// projects: projectsReducer,
	},
	middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
