import {
  fetchManyVariablesError,
  fetchManyVariablesGroup,
  fetchManyVariables,
  fetchManyVariablesSubGroup,
  selectManyVariablesCategoryName,
  setManyVariablesCategoryName,
  selectManyVariablesGroupName,
  setManyVariablesGroupName,
  setManyVariablesSubGroupName,
  selectManyVariablesSubGroupName,
  fetchManyVariablesVariables,
  selectManyVariablesVariablesName,
  setManyVariablesVariablesNames,
  fetchManyVariablesFinalData,
} from './manyVariablesSlice'
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
function* fetchManyVariablesSaga() {
  try {
    const data = yield call(getCategory)
    console.log('data', data)
    data === ''
      ? yield put(fetchManyVariablesError(1))
      : yield put(fetchManyVariables(data))
  } catch (error) {
    yield delay(200)
    yield put(fetchManyVariablesError(1))
  }
}

function* fetchManyVariablesGroupSaga() {
  try {
    const categoryName = yield select(selectManyVariablesCategoryName)
    const data = yield call(getGroup, categoryName)
    yield put(fetchManyVariablesGroup(data))
  } catch (error) {
    yield delay(200)
    yield put(fetchManyVariablesError(2))
  }
}

function* fetchManyVariablesSubGroupSaga() {
  try {
    const groupName = yield select(selectManyVariablesGroupName)
    const data = yield call(getSubGroup, groupName)
    yield put(fetchManyVariablesSubGroup(data))
  } catch (error) {
    yield delay(200)
    yield put(fetchManyVariablesError(3))
  }
}

function* fetchManyVariablesVariablesSaga() {
  try {
    const subGroupName = yield select(selectManyVariablesSubGroupName)
    const data = yield call(getVariables, subGroupName)
    data
      ? yield put(fetchManyVariablesVariables(data))
      : yield put(fetchManyVariablesError('variablesSaga'))
  } catch (error) {
    yield delay(200)
    yield put(fetchManyVariablesError(4))
  }
}

function* fetchManyVariablesFinalDataSaga() {
  try {
    const variablesName = yield select(selectManyVariablesVariablesName)
    const selectedUnit = yield select(selectRegionAndProvincesMapsSelectedMap)
    if ((variablesName !== '') & (selectedUnit !== '')) {
      const data = yield call(getFinalData, variablesName, selectedUnit[1])
      if (data !== '') {
        yield put(fetchManyVariablesFinalData(data))
      }
    }

    // const data =
    // 	variablesName !== "" && selectedUnit[0] !== ""
    // 		? yield call(getFinalData, variablesName, selectedUnit[1])
    // 		: "";
  } catch (error) {
    yield delay(200)
    yield put(fetchManyVariablesError(5))
  }
}

export function* manyVariablesSaga() {
  yield fetchManyVariablesSaga()
  yield takeLatest(
    setManyVariablesCategoryName.type,
    fetchManyVariablesGroupSaga,
  )
  yield takeLatest(
    setManyVariablesGroupName.type,
    fetchManyVariablesSubGroupSaga,
  )
  yield takeLatest(
    setManyVariablesSubGroupName.type,
    fetchManyVariablesVariablesSaga,
  )
  yield takeLatest(
    [setSelectedMap.type, setManyVariablesVariablesNames.type],
    fetchManyVariablesFinalDataSaga,
  )
}
