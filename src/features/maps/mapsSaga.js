
// import { fetchTeritorialUnitError, fetchTeritorialUnitGroup, fetchTeritorialUnit, fetchTeritorialUnitSubGroup, selectTeritorialUnitCategoryName, setTeritorialUnitCategoryName, selectTeritorialUnitGroupName, setTeritorialUnitGroupName, setTeritorialUnitSubGroupName, selectTeritorialUnitSubGroupName, fetchTeritorialUnitVariables, selectTeritorialUnitVariablesName, setTeritorialUnitVariablesName, fetchTeritorialUnitFinalData } from "./teritorialUnitManyVariablesSlice";
// import { getCategory, getFinalData, getGroup, getSubGroup, getVariables } from "./getApi";
import { call, delay, put, select, takeLatest } from "@redux-saga/core/effects";
import { selectRegionAndProvincesMapsSelectedMap, setSelectedMap } from "./mapsSlice";
import { fetchTeritorialUnitError, fetchTeritorialUnitFinalData, selectTeritorialUnitVariablesName, setTeritorialUnitVariablesName } from "../baseLocalData/teritorialUnitManyVariables/teritorialUnitManyVariablesSlice";
import { getFinalData } from "../baseLocalData/teritorialUnitManyVariables/getApi";

// function* fetchTeritorialUnitSaga() {
//   try {
//     const data = yield call(getCategory);
//     yield put(fetchTeritorialUnit(data));
//   } catch (error) {
//     yield delay(200);
//     yield put(fetchTeritorialUnitError());
//   };
// };

// function* fetchTeritorialUnitGroupSaga() {
//   try {
//     const categoryName = yield select(selectTeritorialUnitCategoryName);
//     const data = yield call(getGroup, categoryName);
//     yield put(fetchTeritorialUnitGroup(data));
//   } catch (error) {
//     yield delay(200);
//     yield put(fetchTeritorialUnitError());
//   };
// };

// function* fetchTeritorialUnitSubGroupSaga() {
//   try {
//     const groupName = yield select(selectTeritorialUnitGroupName);
//     const data = yield call(getSubGroup, groupName);
//     yield put(fetchTeritorialUnitSubGroup(data));
//   } catch (error) {
//     yield delay(200);
//     yield put(fetchTeritorialUnitError());
//   };
// };

// function* fetchTeritorialUnitVariablesSaga() {
//   try {
//     const subGroupName = yield select(selectTeritorialUnitSubGroupName);
//     const data = yield call(getVariables, subGroupName);
//     yield put(fetchTeritorialUnitVariables(data));
//   } catch (error) {
//     yield delay(200);
//     yield put(fetchTeritorialUnitError());
//   };
// };

// function* fetchTeritorialUnitFinalDataSaga() {
//   try {
//     const variablesName = yield select(selectTeritorialUnitVariablesName);
//     const selectedUnit = "071400000000";
//     const data = yield call(getFinalData, variablesName, selectedUnit);
//     yield put(fetchTeritorialUnitFinalData(data));
//   } catch (error) {
//     yield delay(200);
//     yield put(fetchTeritorialUnitError());
//   };
//  };

// function* setSelectedRegionHandler() {
//   const tasks = yield select(selectTasksState);
//   yield call(saveTasksInLocalStorage, tasks.tasks);
// }



export function* mapsSaga() {
  // yield (fetchTeritorialUnitSaga());
  // yield takeLatest(setTeritorialUnitCategoryName.type, fetchTeritorialUnitGroupSaga);
  // yield takeLatest(setTeritorialUnitGroupName.type, fetchTeritorialUnitSubGroupSaga);
  // yield takeLatest(setTeritorialUnitSubGroupName.type, fetchTeritorialUnitVariablesSaga);
  //yield takeLatest(setSelectedMap, fetchTeritorialUnitFinalDataSaga);
}