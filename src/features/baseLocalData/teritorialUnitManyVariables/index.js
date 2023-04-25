import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTeritorialUnitCategoryData,
  selectTeritorialUnitCategoryName,
  selectTeritorialUnitFinalData,
  selectTeritorialUnitGroupData,
  selectTeritorialUnitGroupName,
  selectTeritorialUnitSubGroupData,
  selectTeritorialUnitSubGroupName,
  selectTeritorialUnitVariablesData,
  selectTeritorialUnitVariablesName,
  setTeritorialUnitCategoryName,
  setTeritorialUnitGroupName,
  setTeritorialUnitSubGroupName,
  setTeritorialUnitVariablesName
} from "./teritorialUnitManyVariablesSlice";
import { nanoid } from "@reduxjs/toolkit";
import { measures } from "../../../common/measures";
import { SelectBoxTeritorialUnitManyVariables } from "../../../common/select";

export const TeritorialUnit = () => {

  const teritorialUnit = useSelector(selectTeritorialUnitCategoryData);
  const teritorialUnitGroup = useSelector(selectTeritorialUnitGroupData);
  const teritorialUnitSubGroup = useSelector(selectTeritorialUnitSubGroupData);
  const teritorialUnitVariables = useSelector(selectTeritorialUnitVariablesData);
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);

  const teritorialUnitCategoryName = useSelector(selectTeritorialUnitCategoryName);
  const teritorialUnitGroupName = useSelector(selectTeritorialUnitGroupName);
  const teritorialUnitSubGroupName = useSelector(selectTeritorialUnitSubGroupName);
  const teritorialUnitVariablesName = useSelector(selectTeritorialUnitVariablesName);

  return (
    <>
      <div>{
        ((teritorialUnit) ?
          <div>
            <div>
              <label>Wybierz kategorię: </label>
              <SelectBoxTeritorialUnitManyVariables
                teritorialUnitType={teritorialUnit}
                setValue={setTeritorialUnitCategoryName}
              />
            </div>
          </div>
          : "nie")
      }</div >
      {(teritorialUnitCategoryName !== "")
        ?
        <div>{
          ((teritorialUnitGroup)
            ?
            <div>
              <div>
                <label>Wybierz grupę: </label>
                <SelectBoxTeritorialUnitManyVariables
                  teritorialUnitType={teritorialUnitGroup}
                  setValue={setTeritorialUnitGroupName}
                />
              </div>
            </div>
            : "")
        }</div>
        :
        ("")
      }

      {
        (teritorialUnitGroupName !== "")
          ?
          <div>{
            ((teritorialUnitSubGroup)
              ?
              <div>
                <div>
                  <label>Wybierz podgrupę: </label>
                  <SelectBoxTeritorialUnitManyVariables
                    teritorialUnitType={teritorialUnitSubGroup}
                    setValue={setTeritorialUnitSubGroupName}
                  />
                </div>
              </div>
              : "")
          }</div>
          :
          ("")
      }

      {
        (teritorialUnitSubGroupName !== "")
          ?
          <div>{
            ((teritorialUnitVariables)
              ?
              <div>
                <div>
                  <label>Wybierz zmienną: </label>
                  <SelectBoxTeritorialUnitManyVariables
                    teritorialUnitType={teritorialUnitVariables}
                    setValue={setTeritorialUnitVariablesName}
                  />
                </div>
              </div>
              : "")
          }</div>
          :
          ("")
      }

      {
        (teritorialUnitVariablesName !== "")
          ?
          <div>
            {
              teritorialUnitFinalData
                ?
                ((teritorialUnitFinalData.totalRecords === 0)
                  ?
                  "Brak danych"
                  :
                  (teritorialUnitFinalData.results).map(result => <ul key={nanoid()}>{(result.values).map(value => <li key={nanoid()}>
                    {value.val} {`${(measures.results.find(measure => measure.id === result.measureUnitId).name)}`} w
                    {value.year}
                    roku

                  </li>)}</ul>)
                )
                : ""
            }
          </div>
          :
          ("")
      }
    </>
  )
};