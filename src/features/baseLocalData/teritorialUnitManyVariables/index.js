import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTeritorialUnitCategoryData,
  selectTeritorialUnitCategoryName,
  selectTeritorialUnitFinalData,
  selectTeritorialUnitFinalValues,
  selectTeritorialUnitGroupData,
  selectTeritorialUnitGroupName,
  selectTeritorialUnitSubGroupData,
  selectTeritorialUnitSubGroupName,
  selectTeritorialUnitVariablesData,
  selectTeritorialUnitVariablesName,
  setTeritorialUnitCategoryName,
  setTeritorialUnitFinalData,
  setTeritorialUnitGroupName,
  setTeritorialUnitSubGroupName,
  setTeritorialUnitVariablesName
} from "./teritorialUnitManyVariablesSlice";
import { nanoid } from "@reduxjs/toolkit";
import { measures } from "../../../common/measures";
import { SelectBoxTeritorialUnitManyVariables } from "../../../common/select";
import { useState } from "react";
import { useEffect } from "react";
import { ReactComponent as TriangleUp } from '../../../common/images/triangleUp.svg';
import { Triangle, TriangleVal, TriangleYear } from "./Triangle";

export const TeritorialUnit = () => {
  const dispatch = useDispatch();

  const teritorialUnit = useSelector(selectTeritorialUnitCategoryData);
  const teritorialUnitGroup = useSelector(selectTeritorialUnitGroupData);
  const teritorialUnitSubGroup = useSelector(selectTeritorialUnitSubGroupData);
  const teritorialUnitVariables = useSelector(selectTeritorialUnitVariablesData);
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
  const teritorialUnitFinalValues = useSelector(selectTeritorialUnitFinalValues);

  const teritorialUnitCategoryName = useSelector(selectTeritorialUnitCategoryName);
  const teritorialUnitGroupName = useSelector(selectTeritorialUnitGroupName);
  const teritorialUnitSubGroupName = useSelector(selectTeritorialUnitSubGroupName);
  const teritorialUnitVariablesName = useSelector(selectTeritorialUnitVariablesName);

  const [data, setData] = useState(teritorialUnitFinalValues);
  const [order, setOrder] = useState(["year", "ASC"]);

  useEffect(() => {
    setData(teritorialUnitFinalValues)
  }, [teritorialUnitFinalValues]);

  const sorting = (col) => {
    if (order[1] === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setData(sorted);
      setOrder([col, "ASC"]);
    }
    if (order[1] === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setData(sorted);
      setOrder([col, "DSC"]);
    }
  }

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
                  <>
                    {Array.isArray(data)
                      ?
                      teritorialUnitFinalData.results.map(result =>
                        <table>
                          <thead>
                            <th key={nanoid()} onClick={() => sorting("val")}>{`Wartość [${(measures.results.find(measure => measure.id === teritorialUnitFinalData.results[0].measureUnitId).name)}] `}
                              < TriangleVal
                                order={order} />
                            </th>
                            <th key={nanoid()} onClick={() => sorting("year")}>Rok
                              < TriangleYear
                                order={order} /></th>
                          </thead>
                          <tbody>
                            {
                              (Array.isArray(data)
                                ?
                                <>
                                  {
                                    data.map(value =>
                                      <>
                                        <tr key={nanoid()}>
                                          <td>{value.val}</td>
                                          <td>{value.year}</td>
                                        </tr>
                                      </>
                                    )
                                  }
                                </>
                                :
                                ("asdfdhjdfsadfhjgfds"))
                            }
                          </tbody>
                        </table>
                      )
                      :
                      "setData(teritorialUnitFinalValues)"
                    }
                  </>
                )
                :
                ("")
            }
          </div >
          :
          ("")
      }
    </>
  )
};