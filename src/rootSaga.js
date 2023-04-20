
import { all } from "@redux-saga/core/effects"
import { teritorialUnitSaga } from "./features/baseLocalData/teritorialUnitManyVariables/teritorialUnitManyVariablesSaga"
import { mapsSaga } from "./features/maps/mapsSaga"
export default function* rootSaga() {
  yield all([
    teritorialUnitSaga(),
    mapsSaga(),
    // watchFetchPeopleList(),
    // watchPeopleDetails(),
    // watchFetchProjects(),
    // watchFetchGenres(),
    // movieListSaga(),
    // movieDetailsSaga(),
  ])
}