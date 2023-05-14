import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { selectProvinceName } from '../features/baseLocalData/teritorialUnitManyVariables/teritorialUnitManyVariablesSlice';
import { useEffect } from 'react';

export const SelectBoxTeritorialUnitOneVariable = ({ teritorialUnitType, setValue }) => {
  const dispatch = useDispatch();
  const style = {
    control: styles => ({
      ...styles, display: "flex", width: "fit-content", margin: "0 10px", cursor: "pointer",
    }),
  };


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
        autoFocus={true}
        styles={style}
        options={
          (teritorialUnitType.results.map((unit) =>
          (
            {
              value: unit.id,
              label: ((unit.n3) ? (unit.n1 + " " + unit.n2 + " " + unit.n3)
                :
                ((unit.n2) ? (unit.n1 + " " + unit.n2)
                  :
                  (unit.n1 ? (unit.n1)
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
};

export const SelectBoxTeritorialUnitManyVariables = ({ teritorialUnitType, setValue }) => {
  const dispatch = useDispatch();
  const style = {
    control: styles => ({
      ...styles, display: "flex", width: "fit-content", margin: "0 10px", cursor: "pointer",
    }),
  };

  console.log("teritorialUnitType", teritorialUnitType)
  return (
    <>
      <Select
        className="basic-multi-select"
        classNamePrefix="select"
        defaultValue={null
        }
        isMulti
        isClearable={true}
        isSearchable={true}
        autoFocus={true}
        styles={style}
        options={
          (teritorialUnitType.results.map((unit) =>
          (
            {
              value: unit.id,
              label: ((unit.n3) ? (unit.n1 + " " + unit.n2 + " " + unit.n3)
                :
                ((unit.n2) ? (unit.n1 + " " + unit.n2)
                  :
                  (unit.n1 ? (unit.n1)
                    :
                    (unit.name))
                ))
            }
          )
          ))
        }
        onChange={(target) => (dispatch(setValue(target)) && console.log("target", target))}
      >
      </Select>
    </>
  )
};

export const SelectBoxRegionNameDisplay = ({ poland, handleMouseOver, handleMouseOut, isHovering, setProvinceName }) => {
  const dispatch = useDispatch();
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={{
        value: "",
        label: "Wybierz województwo"
      }
      }
      isClearable={false}
      isSearchable={true}
      options={
        poland.map(province =>
        (
          {
            value: (province.id),
            label: (
              <Link
                to={`/maps/provinces/${province.name}`}
                data-tooltip-content={`${province.name}`}
                style={{
                  display: 'flex', justifyContent: 'center', textDecoration: "none", color: "black",
                  fontWeight: (isHovering === province.name ? "700" : "")
                }}
                onMouseOver={() => handleMouseOver(province)}
                onMouseOut={() => handleMouseOut()}
              >
                {province.name}
              </Link>
            ),
          }
        ))
      }
    >
    </Select>
  )
}