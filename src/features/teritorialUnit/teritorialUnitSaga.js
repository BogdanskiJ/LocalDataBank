import {
  fetchTeritorialUnitError,
  fetchTeritorialUnitGroup,
  fetchTeritorialUnit,
  fetchTeritorialUnitSubGroup,
  selectTeritorialUnitCategoryName,
  setTeritorialUnitCategoryName,
  selectTeritorialUnitGroupName,
  setTeritorialUnitGroupName,
  setTeritorialUnitSubGroupName,
  selectTeritorialUnitSubGroupName,
  fetchTeritorialUnitVariables,
  selectTeritorialUnitVariablesName,
  setTeritorialUnitVariablesNames,
  fetchTeritorialUnitFinalData,
} from './teritorialUnitSlice'
import {
  getCategory,
  getFinalData,
  getGroup,
  getSubGroup,
  getVariables,
} from './getApi'
import {call, delay, put, select, takeLatest} from '@redux-saga/core/effects'
import {
  selectRegionAndProvincesMapsSelectedMap,
  setSelectedMap,
} from '../maps/mapsSlice'
function* fetchTeritorialUnitSaga() {
  try {
    const data = yield call(getCategory)
    console.log('data', data)
    data === ''
      ? yield put(fetchTeritorialUnitError(1))
      : yield put(fetchTeritorialUnit(data))
  } catch (error) {
    yield delay(200)
    yield put(fetchTeritorialUnitError(1))
  }
}

function* fetchTeritorialUnitGroupSaga() {
  try {
    const categoryName = yield select(selectTeritorialUnitCategoryName)
    const data = yield call(getGroup, categoryName)
    yield put(fetchTeritorialUnitGroup(data))
  } catch (error) {
    yield delay(200)
    yield put(fetchTeritorialUnitError(2))
  }
}

function* fetchTeritorialUnitSubGroupSaga() {
  try {
    const groupName = yield select(selectTeritorialUnitGroupName)
    const data = yield call(getSubGroup, groupName)
    yield put(fetchTeritorialUnitSubGroup(data))
  } catch (error) {
    yield delay(200)
    yield put(fetchTeritorialUnitError(3))
  }
}

function* fetchTeritorialUnitVariablesSaga() {
  try {
    const subGroupName = yield select(selectTeritorialUnitSubGroupName)
    const data = yield call(getVariables, subGroupName)
    data
      ? yield put(fetchTeritorialUnitVariables(data))
      : yield put(fetchTeritorialUnitError('variablesSaga'))
  } catch (error) {
    yield delay(200)
    yield put(fetchTeritorialUnitError(4))
  }
}

function* fetchTeritorialUnitFinalDataSaga() {
  try {
    const variablesName = yield select(selectTeritorialUnitVariablesName)
    const selectedUnit = yield select(selectRegionAndProvincesMapsSelectedMap)
    if ((variablesName !== '') & (selectedUnit !== '')) {
      const data = yield call(getFinalData, variablesName, selectedUnit[1])
      if (data !== '') {
        yield put(fetchTeritorialUnitFinalData(data))
      }
    }

    // const data =
    // 	variablesName !== "" && selectedUnit[0] !== ""
    // 		? yield call(getFinalData, variablesName, selectedUnit[1])
    // 		: "";
  } catch (error) {
    yield delay(200)
    yield put(fetchTeritorialUnitError(5))
  }
}

export function* teritorialUnitSaga() {
  yield fetchTeritorialUnitSaga()
  yield takeLatest(
    setTeritorialUnitCategoryName.type,
    fetchTeritorialUnitGroupSaga,
  )
  yield takeLatest(
    setTeritorialUnitGroupName.type,
    fetchTeritorialUnitSubGroupSaga,
  )
  yield takeLatest(
    setTeritorialUnitSubGroupName.type,
    fetchTeritorialUnitVariablesSaga,
  )
  yield takeLatest(
    [setSelectedMap.type, setTeritorialUnitVariablesNames.type],
    fetchTeritorialUnitFinalDataSaga,
  )
}
