import React from "react";
import { useSelector } from "react-redux";
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
  setTeritorialUnitVariablesNames
} from "./teritorialUnitManyVariablesSlice";
import { SelectBoxTeritorialUnitManyVariables, SelectBoxTeritorialUnitOneVariable } from "../../../common/select";
import { Results } from "./displayingResults";

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
              <SelectBoxTeritorialUnitOneVariable
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
                <SelectBoxTeritorialUnitOneVariable
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
                  <SelectBoxTeritorialUnitOneVariable
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
                  <label>Wybierz zmienne: </label>
                  <SelectBoxTeritorialUnitManyVariables
                    teritorialUnitType={teritorialUnitVariables}
                    setValue={setTeritorialUnitVariablesNames}
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
              teritorialUnitFinalData !== ""
                ?
                ((teritorialUnitFinalData.totalRecords === 0)
                  ?
                  "Brak danych"
                  :
                  <>
                    <Results />
                    {"final data istneiej "}
                  </>
                )
                :
                (console.log("Brak danychhhh", teritorialUnitFinalData) && "brak danychhh")
            }
          </div >
          :
          ("teritorialUnitVariablesName nie istnieje")
      }
    </>
  )
};