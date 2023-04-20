import { createSlice } from "@reduxjs/toolkit";

const teritorialUnitSlice = createSlice({
  name: "teritorialUnitData",
  initialState: {
    status: "loading",
    categoryData: "",
    groupData: "",
    subGroupData: "",
    variablesData: "",
    finalData: "",
    categoryName: "",
    groupName: "",
    subGroupName: "",
    variablesName: "",
  },
  reducers: {
    fetchTeritorialUnit: (state, { payload: data }) => {
      state.status = "success";
      state.categoryData = data;
    },
    fetchTeritorialUnitGroup: (state, { payload: data }) => {
      state.groupData = data;
    },
    fetchTeritorialUnitSubGroup: (state, { payload: data }) => {
      state.subGroupData = data;
    },
    fetchTeritorialUnitVariables: (state, { payload: data }) => {
      state.variablesData = data;
    },
    fetchTeritorialUnitFinalData: (state, { payload: data }) => {
      state.finalData = data;
    },
    fetchTeritorialUnitError: (state) => {
      state.status = "error";
    },
    setTeritorialUnitCategoryName: (state, { payload: name }) => {
      state.categoryName = name;
      state.groupData = "";
      state.subGroupData = "";
      state.variablesData = "";
      state.variablesName = "";
      state.finalData = "";
    },
    setTeritorialUnitGroupName: (state, { payload: name }) => {
      state.groupName = name;
      state.subGroupData = "";
      state.variablesData = "";
      state.variablesName = "";
      state.finalData = "";
    },
    setTeritorialUnitSubGroupName: (state, { payload: name }) => {
      state.subGroupName = name;
      state.variablesData = "";
      state.variablesName = "";
      state.finalData = "";
    },
    setTeritorialUnitVariablesName: (state, { payload: name }) => {
      state.variablesName = name;
      state.finalData = "";
    },
  },
});

export const {
  fetchTeritorialUnit,
  fetchTeritorialUnitGroup,
  fetchTeritorialUnitSubGroup,
  fetchTeritorialUnitVariables,
  fetchTeritorialUnitFinalData,
  fetchTeritorialUnitError,
  setTeritorialUnitCategoryName,
  setTeritorialUnitGroupName,
  setTeritorialUnitSubGroupName,
  setTeritorialUnitVariablesName,
} = teritorialUnitSlice.actions;

export const selectTeritorialUnitState = state => state.teritorialUnit;
export const selectTeritorialUnitCategoryData = state => selectTeritorialUnitState(state).categoryData;
export const selectTeritorialUnitGroupData = state => selectTeritorialUnitState(state).groupData;
export const selectTeritorialUnitSubGroupData = state => selectTeritorialUnitState(state).subGroupData;
export const selectTeritorialUnitVariablesData = state => selectTeritorialUnitState(state).variablesData;
export const selectTeritorialUnitFinalData = state => selectTeritorialUnitState(state).finalData;
export const selectTeritorialUnitCategoryName = state => selectTeritorialUnitState(state).categoryName;
export const selectTeritorialUnitGroupName = state => selectTeritorialUnitState(state).groupName;
export const selectTeritorialUnitSubGroupName = state => selectTeritorialUnitState(state).subGroupName;
export const selectTeritorialUnitVariablesName = state => selectTeritorialUnitState(state).variablesName;
export default teritorialUnitSlice.reducer;