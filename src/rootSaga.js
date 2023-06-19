import {all} from '@redux-saga/core/effects'
import {mapsSaga} from './features/maps/mapsSaga'
import {teritorialUnitSaga} from './features/teritorialUnit/teritorialUnitSaga'
import {manyVariablesSaga} from './features/manyVariables/manyVariablesSaga'
export default function* rootSaga() {
  yield all([
    teritorialUnitSaga(),
    manyVariablesSaga(),
    mapsSaga(),
    // watchFetchPeopleList(),
    // watchPeopleDetails(),
    // watchFetchProjects(),
    // watchFetchGenres(),
    // movieListSaga(),
    // movieDetailsSaga(),
  ])
}
