import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Select from 'react-select';


export const SelectBoxTeritorialUnitManyVariables = ({ teritorialUnitType, setValue }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={{
          value: "",
          label: "wybierz"
        }
        }
        isClearable={false}
        isSearchable={true}
        name="colors"
        options={
          (teritorialUnitType.results.map((unit) =>
          (
            {
              value: unit.id,
              label: ((unit.n3 !== undefined) ? (unit.n1 + " " + unit.n2 + " " + unit.n3)
                :
                ((unit.n2 !== undefined) ? (unit.n1 + " " + unit.n2)
                  :
                  (unit.n1 !== undefined ? (unit.n1)
                    :
                    (unit.name))
                ))
            }
          )
          ))
        }
        onChange={(target) => dispatch(setValue(target.value))}
      >
      </Select>
    </>
  )
}