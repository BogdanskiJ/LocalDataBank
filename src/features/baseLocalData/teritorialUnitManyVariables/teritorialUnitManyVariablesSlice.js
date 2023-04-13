import { createSlice } from "@reduxjs/toolkit";


const teritorialUnitSlice = createSlice({
  name: "teritorialUnitData",
  initialState: {
    status: "loading",
    categoryData: "",
    categoryName: "niewybrana",
    groupData: "",
    subGroupData: "",
  },
  reducers: {
    fetchTeritorialUnit: (state, { payload: data }) => {
      state.status = "success";
      state.categoryData = data;
    },
    setTeritorialUnitCategoryName: (state, { payload: name }) => {
      state.categoryName = name;
    },
    fetchTeritorialUnitGroup: (state, { payload: data }) => {
      state.status = "success";
      state.groupData = data;
    },
    fetchTeritorialUnitSubGroup: (state, { payload: data }) => {
      state.status = "success";
      state.subGroupData = data;
    },
    fetchTeritorialUnitError: (state) => {
      state.status = "error";
    },
    fetchCategory: () => { },
    fetchGroup: () => { },
  },
});

export const {
  fetchTeritorialUnit,
  setTeritorialUnitCategoryName,
  fetchTeritorialUnitGroup,
  fetchTeritorialUnitSubGroup,
  fetchTeritorialUnitError,
} = teritorialUnitSlice.actions;

export const selectTeritorialUnitState = state => state.teritorialUnit;
export const selectTeritorialUnitCategoryData = state => selectTeritorialUnitState(state).categoryData;
export const selectTeritorialUnitCategoryName = state => selectTeritorialUnitState(state).categoryName;
export const selectTeritorialUnitGroupData = state => selectTeritorialUnitState(state).groupData;
export const selectTeritorialUnitSubGroupData = state => selectTeritorialUnitState(state).subGroupData;
export default teritorialUnitSlice.reducer;