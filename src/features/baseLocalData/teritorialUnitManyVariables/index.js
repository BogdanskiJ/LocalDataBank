import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTeritorialUnitCategoryData, selectTeritorialUnitGroupData, setTeritorialUnitCategoryName } from "./teritorialUnitManyVariablesSlice";


export const TeritorialUnit = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("")
  const onCategoryChange = ({ target }) => setCategory(target.value)

  const [group, setGroup] = useState("")
  const onGroupChange = ({ target }) => setGroup(target.value)


  useEffect(() => {
    dispatch(setTeritorialUnitCategoryName(category));

  }, [dispatch, category]);



  // useEffect(() => {
  //   dispatch(setPage(page));
  // }, [dispatch]);

  const teritorialUnit = useSelector(selectTeritorialUnitCategoryData);
  const teritorialUnitGroup = useSelector(selectTeritorialUnitGroupData)
  // const categoryFromRedux = useSelector(selectTeritorialUnitCategoryData);

  return (
    <>
      <div>{
        ((teritorialUnit) ?
          <div>
            <div>
              <label>Wybierz kategorię: </label>
              <select
                value={category}
                onChange={onCategoryChange}
              >
                {(teritorialUnit.results).map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          : "nie")
      }</div>
      {(category !== "")
        ?
        <div>{
          ((teritorialUnitGroup) ?
            <div>
              <div>
                <label>Wybierz grupę: </label>
                <select
                  value={group}
                  onChange={onGroupChange}
                >
                  {(teritorialUnitGroup.results).map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            : "")
        }</div>
        :
        ("")}






      {/* {
        ((Array.isArray((teritorialUnit2.data.results)) && (teritorialUnit2.data.results) !== undefined) ? <div>{
          <div>
            <label>Wybierz grupę: </label>
            <select
              value={category2}
              onChange={onCategoryChange2}>
              {(teritorialUnit2.data.results).map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.name}
                </option>
              ))}
            </select>
          </div>
        }</div> : "nie")
      }
      {
        ((Array.isArray((teritorialUnit3.data.results)) && (teritorialUnit3.data.results) !== undefined) ? <div>{
          <div>
            <label>Wybierz podgrupę: </label>
            <select
              value={category3}
              onChange={onCategoryChange3}>
              {(teritorialUnit3.data.results).map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.name}
                </option>
              ))}
            </select>
          </div>
        }</div> : "nie")
      }
      {
        ((Array.isArray((teritorialUnit4.data.results)) && (teritorialUnit4 !== undefined)) ?
          <div>{
            <div>
              <label>Wybierz wariant: </label>
              <select
                value={category4}
                onChange={onCategoryChange4}>
                {(teritorialUnit4.data.results).map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.n1}{" "}{unit.n2}
                  </option>
                ))}
              </select>
            </div>
          }{""}</div>
          : "")
      } */}
    </>
  )
};