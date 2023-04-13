
import { fetchTeritorialUnitError, fetchTeritorialUnitGroup, fetchTeritorialUnit, fetchTeritorialUnitSubGroup, selectTeritorialUnitCategoryName, setTeritorialUnitCategoryName } from "./teritorialUnitManyVariablesSlice";
import { getCategory, getGroup } from "./getApi";
import { call, delay, put, select, takeLatest } from "@redux-saga/core/effects";

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
    const data = yield call(getGroup);
    yield put(fetchTeritorialUnitSubGroup(data));
  } catch (error) {
    yield delay(200);
    yield put(fetchTeritorialUnitError());
  };
};


export function* teritorialUnitSaga() {
  yield (fetchTeritorialUnitSaga())
  yield takeLatest(setTeritorialUnitCategoryName.type, fetchTeritorialUnitGroupSaga)
  yield takeLatest(fetchTeritorialUnit.type, fetchTeritorialUnitSubGroupSaga)
}