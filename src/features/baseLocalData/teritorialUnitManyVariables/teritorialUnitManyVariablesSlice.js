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
    provinceName: "",
    finalValues: "",
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
      console.log("state.variablesData", state.variablesData)
    },
    fetchTeritorialUnitFinalData: (state, { payload: data }) => {
      state.finalData = data;
      const finalArray = [];
      const finalValuesArray = data.results.map(result => finalArray.push(result.values));
      state.finalValues = finalArray
      console.log(state.finalValues)
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
    setTeritorialUnitVariablesNames: (state, { payload: name }) => {
      state.variablesName = name;
      state.finalData = "";
    },
    setProvinceName: (state, { payload: name }) => {
      state.provinceName = name;
      console.log(state.provinceName)
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
  setTeritorialUnitVariablesNames,
  setProvinceName,
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
export const selectProvinceName = state => selectTeritorialUnitState(state).provinceName;
export const selectTeritorialUnitFinalValues = state => selectTeritorialUnitState(state).finalValues;
export default teritorialUnitSlice.reducer;