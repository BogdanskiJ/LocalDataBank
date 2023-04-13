
import { all } from "@redux-saga/core/effects"
import { teritorialUnitSaga } from "./features/baseLocalData/teritorialUnitManyVariables/teritorialUnitManyVariablesSaga"
export default function* rootSaga() {
  yield all([
    teritorialUnitSaga(),
    // watchFetchPeopleList(),
    // watchPeopleDetails(),
    // watchFetchProjects(),
    // watchFetchGenres(),
    // movieListSaga(),
    // movieDetailsSaga(),
  ])
}