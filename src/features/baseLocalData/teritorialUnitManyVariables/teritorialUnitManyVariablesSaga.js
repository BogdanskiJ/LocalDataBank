import { fetchTeritorialUnitError, fetchTeritorialUnitGroup, fetchTeritorialUnit, fetchTeritorialUnitSubGroup, selectTeritorialUnitCategoryName, setTeritorialUnitCategoryName, selectTeritorialUnitGroupName, setTeritorialUnitGroupName, setTeritorialUnitSubGroupName, selectTeritorialUnitSubGroupName, fetchTeritorialUnitVariables, selectTeritorialUnitVariablesName, setTeritorialUnitVariablesName, fetchTeritorialUnitFinalData } from "./teritorialUnitManyVariablesSlice";
import { getCategory, getFinalData, getGroup, getSubGroup, getVariables } from "./getApi";
import { call, delay, put, select, takeLatest } from "@redux-saga/core/effects";
import { selectRegionAndProvincesMapsSelectedMap, setSelectedMap } from "../../maps/mapsSlice";

function* fetchTeritorialUnitSaga() {
  try {
    const data = yield call(getCategory);
    yield put(fetchTeritorialUnit(data));
  } catch (error) {
    yield delay(200);
    yield put(fetchTeritorialUnitError());
  };
};

function* fetchTeritorialUnitGroupSaga() {
  try {
    const categoryName = yield select(selectTeritorialUnitCategoryName);
    const data = yield call(getGroup, categoryName);
    yield put(fetchTeritorialUnitGroup(data));
  } catch (error) {
    yield delay(200);
    yield put(fetchTeritorialUnitError());
  };
};

function* fetchTeritorialUnitSubGroupSaga() {
  try {
    const groupName = yield select(selectTeritorialUnitGroupName);
    const data = yield call(getSubGroup, groupName);
    yield put(fetchTeritorialUnitSubGroup(data));
  } catch (error) {
    yield delay(200);
    yield put(fetchTeritorialUnitError());
  };
};

function* fetchTeritorialUnitVariablesSaga() {
  try {
    const subGroupName = yield select(selectTeritorialUnitSubGroupName);
    const data = yield call(getVariables, subGroupName);
    yield put(fetchTeritorialUnitVariables(data));
  } catch (error) {
    yield delay(200);
    yield put(fetchTeritorialUnitError());
  };
};

function* fetchTeritorialUnitFinalDataSaga() {
  try {
    const variablesName = yield select(selectTeritorialUnitVariablesName);
    const selectedUnit = yield select(selectRegionAndProvincesMapsSelectedMap);
    const data = ((variablesName === "" || selectedUnit === "") ? "" : yield call(getFinalData, variablesName, selectedUnit[1]));
    yield put(fetchTeritorialUnitFinalData(data));
  } catch (error) {
    yield delay(200);
    yield put(fetchTeritorialUnitError());
  };
};

export function* teritorialUnitSaga() {
  yield (fetchTeritorialUnitSaga());
  yield takeLatest(setTeritorialUnitCategoryName.type, fetchTeritorialUnitGroupSaga);
  yield takeLatest(setTeritorialUnitGroupName.type, fetchTeritorialUnitSubGroupSaga);
  yield takeLatest(setTeritorialUnitSubGroupName.type, fetchTeritorialUnitVariablesSaga);
  yield takeLatest(([setTeritorialUnitVariablesName.type, setSelectedMap.type]), fetchTeritorialUnitFinalDataSaga);
}