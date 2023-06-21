import {createSlice} from '@reduxjs/toolkit'

const manyVariablesSlice = createSlice({
  name: 'manyVariablesData',
  initialState: {
    status: 'loading',
    categoryData: '',
    groupData: '',
    subGroupData: '',
    variablesData: '',
    finalData: '',
    categoryName: '',
    groupName: '',
    subGroupName: '',
    variablesName: '',
    provinceName: '',
    finalValues: '',
    displayResultsSwitcher: true,
    autoScrollSwitcher: true,
  },
  reducers: {
    fetchManyVariables: (state, {payload: data}) => {
      data === '' || data === undefined
        ? (state.status = 'error')
        : (state.status = 'success')
      state.categoryData = data
    },
    fetchManyVariablesGroup: (state, {payload: data}) => {
      data === '' || data === undefined
        ? (state.status = 'error')
        : (state.status = 'success')
      state.groupData = data
    },
    fetchManyVariablesSubGroup: (state, {payload: data}) => {
      data === '' || data === undefined
        ? (state.status = 'error')
        : (state.status = 'success')
      state.subGroupData = data
    },
    fetchManyVariablesVariables: (state, {payload: data}) => {
      data === '' || data === undefined
        ? (state.status = 'error')
        : (state.status = 'success')
      state.variablesData = data
    },
    fetchManyVariablesFinalData: (state, {payload: data}) => {
      data === '' || data === undefined
        ? (state.status = 'error')
        : (state.status = 'success')
      state.finalData = data
      let finalArray = []
      data.results.map(result => (finalArray = [...finalArray, result.values]))
      state.finalValues = finalArray
    },
    fetchManyVariablesError: state => {
      state.status = 'error'
    },
    setManyVariablesBegin: state => {
      state.categoryName = ''
      state.status = 'loading'
      state.groupData = ''
      state.subGroupData = ''
      state.variablesData = ''
      state.groupName = ''
      state.subGroupName = ''
      state.variablesName = ''
      state.finalData = ''
    },
    setManyVariablesCategoryName: (state, {payload: name}) => {
      state.categoryName = name.value
      state.status = 'loading'
      state.groupData = ''
      state.subGroupData = ''
      state.variablesData = ''
      state.groupName = ''
      state.subGroupName = ''
      state.variablesName = ''
      state.finalData = ''
    },
    setManyVariablesGroupName: (state, {payload: name}) => {
      state.groupName = name.value
      state.status = 'loading'
      state.subGroupData = ''
      state.variablesData = ''
      state.subGroupName = ''
      state.variablesName = ''
      state.finalData = ''
    },
    setManyVariablesSubGroupName: (state, {payload: name}) => {
      state.subGroupName = name.value
      state.status = 'loading'
      state.variablesData = ''
      state.variablesName = ''
      state.finalData = ''
    },
    setManyVariablesVariablesNames: (state, {payload: name}) => {
      state.variablesName = name
      state.status = 'loading'
      state.finalData = ''
    },
    setProvinceName: (state, {payload: name}) => {
      state.provinceName = name
    },
    setManyVariablesDisplayResultsSwitcher: state => {
      state.displayResultsSwitcher = !state.displayResultsSwitcher
    },
    setManyVariablesAutoScrollSwitcher: state => {
      state.autoScrollSwitcher = !state.autoScrollSwitcher
    },
    setManyVariablesError: state => {
      state.status = 'error'
    },
  },
})

export const {
  fetchManyVariables,
  fetchManyVariablesGroup,
  fetchManyVariablesSubGroup,
  fetchManyVariablesVariables,
  fetchManyVariablesFinalData,
  fetchManyVariablesError,
  setManyVariablesBegin,
  setManyVariablesCategoryName,
  setManyVariablesGroupName,
  setManyVariablesSubGroupName,
  setManyVariablesVariablesNames,
  setProvinceName,
  setManyVariablesDisplayResultsSwitcher,
  setManyVariablesAutoScrollSwitcher,
  setManyVariablesError,
} = manyVariablesSlice.actions

export const selectManyVariablesState = state => state.manyVariables
export const selectManyVariablesCategoryData = state =>
  selectManyVariablesState(state).categoryData
export const selectManyVariablesGroupData = state =>
  selectManyVariablesState(state).groupData
export const selectManyVariablesSubGroupData = state =>
  selectManyVariablesState(state).subGroupData
export const selectManyVariablesVariablesData = state =>
  selectManyVariablesState(state).variablesData
export const selectManyVariablesFinalData = state =>
  selectManyVariablesState(state).finalData
export const selectManyVariablesCategoryName = state =>
  selectManyVariablesState(state).categoryName
export const selectManyVariablesGroupName = state =>
  selectManyVariablesState(state).groupName
export const selectManyVariablesSubGroupName = state =>
  selectManyVariablesState(state).subGroupName
export const selectManyVariablesVariablesName = state =>
  selectManyVariablesState(state).variablesName
export const selectProvinceName = state =>
  selectManyVariablesState(state).provinceName
export const selectManyVariablesFinalValues = state =>
  selectManyVariablesState(state).finalValues
export const selectManyVariablesStatus = state =>
  selectManyVariablesState(state).status
export const selectManyVariablesDisplayResultsSwitcher = state =>
  selectManyVariablesState(state).displayResultsSwitcher
export const selectManyVariablesAutoScrollSwitcher = state =>
  selectManyVariablesState(state).autoScrollSwitcher
export default manyVariablesSlice.reducer
