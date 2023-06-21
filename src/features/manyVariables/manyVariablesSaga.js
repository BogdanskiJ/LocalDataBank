import {call, delay, put, select, takeLatest} from '@redux-saga/core/effects'
import {
  getCategory,
  getFinalData,
  getGroup,
  getSubGroup,
  getVariables,
} from './getApi'
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
  selectRegionAndProvincesMapsSelectedMap,
  setSelectedMap,
} from '../maps/mapsSlice'

function* fetchManyVariablesSaga() {
  try {
    const data = yield call(getCategory)
    data === ''
      ? yield put(fetchManyVariablesError())
      : yield put(fetchManyVariables(data))
  } catch (error) {
    yield delay(200)
    yield put(fetchManyVariablesError())
  }
}

function* fetchManyVariablesGroupSaga() {
  try {
    const categoryName = yield select(selectManyVariablesCategoryName)
    const data = yield call(getGroup, categoryName)
    yield put(fetchManyVariablesGroup(data))
  } catch (error) {
    yield delay(200)
    yield put(fetchManyVariablesError())
  }
}

function* fetchManyVariablesSubGroupSaga() {
  try {
    const groupName = yield select(selectManyVariablesGroupName)
    const data = yield call(getSubGroup, groupName)
    yield put(fetchManyVariablesSubGroup(data))
  } catch (error) {
    yield delay(200)
    yield put(fetchManyVariablesError())
  }
}

function* fetchManyVariablesVariablesSaga() {
  try {
    const subGroupName = yield select(selectManyVariablesSubGroupName)
    const data = yield call(getVariables, subGroupName)
    data
      ? yield put(fetchManyVariablesVariables(data))
      : yield put(fetchManyVariablesError())
  } catch (error) {
    yield delay(200)
    yield put(fetchManyVariablesError())
  }
}

function* fetchManyVariablesFinalDataSaga() {
  try {
    const variablesName = yield select(selectManyVariablesVariablesName)
    const selectedUnit = yield select(selectRegionAndProvincesMapsSelectedMap)
    if ((variablesName !== '') & (selectedUnit !== '')) {
      const data = yield call(
        getFinalData,
        variablesName,
        selectedUnit[1],
        selectedUnit[2],
      )
      if (data !== '') {
        yield put(fetchManyVariablesFinalData(data))
      }
    }
  } catch (error) {
    yield delay(200)
    yield put(fetchManyVariablesError())
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
