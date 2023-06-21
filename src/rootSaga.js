import {all} from '@redux-saga/core/effects'
import {teritorialUnitSaga} from './features/teritorialUnit/teritorialUnitSaga'
import {manyVariablesSaga} from './features/manyVariables/manyVariablesSaga'
export default function* rootSaga() {
  yield all([
    teritorialUnitSaga(),
    manyVariablesSaga(),
    // watchFetchPeopleList(),
    // watchPeopleDetails(),
    // watchFetchProjects(),
    // watchFetchGenres(),
    // movieListSaga(),
    // movieDetailsSaga(),
  ])
}
