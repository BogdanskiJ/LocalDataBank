import React from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import Select from 'react-select'
import {selectProvinceName} from '../../features/teritorialUnit/teritorialUnitSlice'
import {useEffect} from 'react'
import {StyledMultiSelect, StyledSelect} from './styled'
import {useRef} from 'react'

export const SelectBoxOneVariable = ({dataType, setValue}) => {
  const dispatch = useDispatch()
  const style = {
    control: styles => ({
      ...styles,
      display: 'flex',
      width: '100%',
      margin: '0 10px',
      cursor: 'pointer',
      margin: 'auto',
      flexDirection: 'row',
    }),
    option: styles => ({
      ...styles,
      cursor: 'pointer',
    }),
    menuList: styles => ({
      ...styles,
      overflowY: 'scroll',
      maxHeight: '250px',
      '&::-webkit-scrollbar': {
        width: '6px',
        height: '6px',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
        background: 'rgba(0, 0, 0, 0.1)',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
      '&::-webkit-scrollbar-thumb:active': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    }),
    dropdownIndicator: styles => ({
      ...styles,
      width: '100%',
      color: 'green',
      justifyContent: 'center',
      '&:hover': {
        ...styles[`:hover`],
        backgroundColor: 'hsl(120 100% 85% / 1)',
        color: 'green',
      },
    }),
  }

  return (
    <StyledSelect>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={{
          value: '',
          label: 'Wybierz',
        }}
        isClearable={false}
        openMenuOnFocus={true}
        isSearchable={true}
        autoFocus={true}
        styles={style}
        noOptionsMessage={() => 'Brak dostępnych zmiennych'}
        options={dataType.results.map(unit => ({
          value: unit.id,
          label: unit.n3
            ? unit.n1 + ' ' + unit.n2 + ' ' + unit.n3
            : unit.n2
            ? unit.n1 + ' ' + unit.n2
            : unit.n1
            ? unit.n1
            : unit.name,
        }))}
        onChange={target =>
          dispatch(setValue(target)) && console.log(target)
        }></Select>
    </StyledSelect>
  )
}

export const SelectBoxManyVariables = ({dataType, setValue}) => {
  const dispatch = useDispatch()

  const style = {
    control: styles => ({
      ...styles,
      display: 'flex',
      width: '100%',
      maxHeight: '300px',
      cursor: 'pointer',
      flexDirection: 'row',
      '@media (max-width: 576px)': {
        ...styles[`@media ((max-width:${({theme}) => theme.breakpoint.md}))`],
        flexDirection: 'column',
      },
    }),
    option: styles => ({
      ...styles,
      cursor: 'pointer',
    }),
    menuList: styles => ({
      ...styles,
      overflowY: 'scroll',
      maxHeight: '250px',
      '&::-webkit-scrollbar': {
        width: '6px',
        height: '6px',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
        background: 'rgba(0, 0, 0, 0.1)',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
      '&::-webkit-scrollbar-thumb:active': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    }),
    multiValue: styles => ({
      //kontener z tekstem i znakiem usunięcia X
      ...styles,
      display: 'flex',
      flexDirection: 'row',
      width: 'auto',
      textAlign: 'center',
      maxWidth: '100%',
      //maxWidth: 'calc(60%)',
    }),
    multiValueLabel: styles => ({
      //tekst
      ...styles,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      whiteSpace: 'wrap',
    }),
    valueContainer: styles => ({
      //blok z szarym tłem pod tekstem
      ...styles,
      display: 'flex',
      flexDirection: 'row',
      width: 'auto',
      maxWidth: '100%',
      overflowY: 'scroll',
      maxHeight: '250px',
      '&::-webkit-scrollbar': {
        width: '6px',
        height: '6px',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
        background: 'rgba(0, 0, 0, 0.1)',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
      '&::-webkit-scrollbar-thumb:active': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    }),
    indicatorsContainer: styles => ({
      ...styles,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    }),
    clearIndicator: styles => ({
      ...styles,
      width: '100%',
      color: 'red',
      justifyContent: 'center',
      backgroundColor: 'hsl(359deg 100% 94%)',
      borderRadius: '5px',
      border: '1px hsl(359deg 100% 94%) solid',
      '&:hover': {
        ...styles[`:hover`],
        backgroundColor: 'hsl(359deg 100% 84%)',
        color: 'red',
      },
    }),
    dropdownIndicator: styles => ({
      ...styles,
      width: '100%',
      color: 'green',
      justifyContent: 'center',
      backgroundColor: 'hsl(120 100% 95% / 1)',
      borderRadius: '5px',
      border: '1px hsl(120 100% 95% / 1) solid',
      '&:hover': {
        ...styles[`:hover`],
        backgroundColor: 'hsl(120 100% 85% / 1)',
        color: 'green',
        border: '1px hsl(120 100% 95% / 1) solid',
      },
    }),
  }
  return (
    <StyledMultiSelect>
      <Select
        className="basic-multi-select"
        classNamePrefix="select"
        defaultValue={null}
        openMenuOnFocus={true}
        closeMenuOnSelect={false}
        placeholder="Wybierz"
        isMulti
        isClearable={true}
        isSearchable={true}
        noOptionsMessage={() => 'Brak dostępnych zmiennych'}
        isFocused={true}
        autoFocus={true}
        styles={style}
        options={dataType.results.map(unit => ({
          value: unit.id,
          label: unit.n3
            ? unit.n1 + ' ' + unit.n2 + ' ' + unit.n3
            : unit.n2
            ? unit.n1 + ' ' + unit.n2
            : unit.n1
            ? unit.n1
            : unit.name,
        }))}
        onChange={target =>
          dispatch(setValue(target[0] ? target : ''))
        }></Select>
    </StyledMultiSelect>
  )
}

export const SelectBoxRegionNameDisplay = ({
  poland,
  handleMouseOver,
  handleMouseOut,
  isHovering,
  setProvinceName,
}) => {
  const dispatch = useDispatch()
  const style = {
    control: styles => ({
      ...styles,
      cursor: 'pointer',
      minWidth: '100px',
    }),
    option: styles => ({
      ...styles,
      cursor: 'pointer',
    }),
    dropdownIndicator: styles => ({
      ...styles,
      color: 'green',
      justifyContent: 'center',
      backgroundColor: 'hsl(120 100% 95% / 1)',
      borderRadius: '5px',
      border: '1px hsl(120 100% 95% / 1) solid',
      '&:hover': {
        ...styles[`:hover`],
        backgroundColor: 'hsl(120 100% 85% / 1)',
        color: 'green',
        border: '1px hsl(120 100% 95% / 1) solid',
      },
    }),
    menuList: styles => ({
      ...styles,
      overflowY: 'scroll',
      maxHeight: '250px',
      // '&::-webkit-scrollbar': {
      //   width: '8px',
      // },
      // '&::-webkit-scrollbar-thumb': {
      //   width: '20px',
      //   backgroundColor: '#cdcdcd',
      //   border: '1px solid black',
      //   borderRadius: '10px',
      // },

      '&::-webkit-scrollbar': {
        width: '6px',
        height: '6px',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
        background: 'rgba(0, 0, 0, 0.1)',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
      '&::-webkit-scrollbar-thumb:active': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    }),
  }
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      styles={style}
      defaultValue={{
        value: '',
        label: 'Wybierz województwo',
      }}
      isClearable={false}
      isSearchable={true}
      options={poland.map(province => ({
        value: province.id,
        label: province.name,
      }))}
      onChange={target => dispatch(setProvinceName(target.label))}></Select>
  )
}

// export const SelectBoxRegionNameDisplay = ({
// 	poland,
// 	handleMouseOver,
// 	handleMouseOut,
// 	isHovering,
// 	setProvinceName,
// }) => {
// 	const dispatch = useDispatch();
// 	return (
// 		<Select
// 			className="basic-single"
// 			classNamePrefix="select"
// 			defaultValue={{
// 				value: "",
// 				label: "Wybierz województwo",
// 			}}
// 			isClearable={false}
// 			isSearchable={true}
// 			options={poland.map((province) => ({
// 				value: province.id,
// 				label: (
// 					<Link
// 						to={`/maps/provinces/${province.name}`}
// 						data-tooltip-content={`${province.name}`}
// 						style={{
// 							display: "flex",
// 							justifyContent: "center",
// 							textDecoration: "none",
// 							color: "black",
// 							fontWeight: isHovering === province.name ? "700" : "",
// 						}}
// 						onMouseOver={() => handleMouseOver(province)}
// 						onMouseOut={() => handleMouseOut()}>
// 						{province.name}
// 					</Link>
// 				),
// 			}))}
// 			onChange={(target) => dispatch(setProvinceName(target.value))}></Select>
// 	);
// };

export const SelectBoxManyVariablesOneVariable = ({dataType, setValue}) => {
  const dispatch = useDispatch()
  const style = {
    control: styles => ({
      ...styles,
      display: 'flex',
      width: '100%',
      margin: '0 10px',
      cursor: 'pointer',
      margin: 'auto',
      flexDirection: 'row',
    }),
    dropdownIndicator: styles => ({
      ...styles,
      width: '100%',
      color: 'green',
      justifyContent: 'center',
      '&:hover': {
        ...styles[`:hover`],
        backgroundColor: 'hsl(120 100% 85% / 1)',
        color: 'green',
      },
    }),
  }

  return (
    <StyledSelect>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={{
          value: '',
          label: 'wybierz',
        }}
        isClearable={false}
        isSearchable={true}
        autoFocus={true}
        styles={style}
        options={dataType.results.map(unit => ({
          value: unit.id,
          label: unit.n3
            ? unit.n1 + ' ' + unit.n2 + ' ' + unit.n3
            : unit.n2
            ? unit.n1 + ' ' + unit.n2
            : unit.n1
            ? unit.n1
            : unit.name,
        }))}
        onChange={target => dispatch(setValue(target.value))}></Select>
    </StyledSelect>
  )
}

export const SelectBoxManyVariablesManyVariables = ({dataType, setValue}) => {
  const dispatch = useDispatch()

  const style = {
    control: styles => ({
      ...styles,
      display: 'flex',
      width: '100%',
      cursor: 'pointer',
      flexDirection: 'row',
      '@media (max-width: 576px)': {
        ...styles[`@media ((max-width:${({theme}) => theme.breakpoint.md}))`],
        flexDirection: 'column',
      },
    }),
    multiValue: styles => ({
      //kontener z tekstem i znakiem usunięcia X
      ...styles,
      display: 'flex',
      flexDirection: 'row',
      width: 'auto',
      textAlign: 'center',
      maxWidth: '100%',
      //maxWidth: 'calc(60%)',
    }),
    multiValueLabel: styles => ({
      //tekst
      ...styles,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      whiteSpace: 'wrap',
    }),
    valueContainer: styles => ({
      //blok z szarym tłem pod tekstem
      ...styles,
      display: 'flex',
      flexDirection: 'row',
      width: 'auto',
      maxWidth: '100%',
    }),
    indicatorsContainer: styles => ({
      ...styles,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    }),
    clearIndicator: styles => ({
      ...styles,
      width: '100%',
      color: 'red',
      justifyContent: 'center',
      backgroundColor: 'hsl(359deg 100% 94%)',
      borderRadius: '5px',
      border: '1px hsl(359deg 100% 94%) solid',
      '&:hover': {
        ...styles[`:hover`],
        backgroundColor: 'hsl(359deg 100% 84%)',
        color: 'red',
      },
    }),
    dropdownIndicator: styles => ({
      ...styles,
      width: '100%',
      color: 'green',
      justifyContent: 'center',
      backgroundColor: 'hsl(120 100% 95% / 1)',
      borderRadius: '5px',
      border: '1px hsl(120 100% 95% / 1) solid',
      '&:hover': {
        ...styles[`:hover`],
        backgroundColor: 'hsl(120 100% 85% / 1)',
        color: 'green',
        border: '1px hsl(120 100% 95% / 1) solid',
      },
    }),
  }
  return (
    <StyledMultiSelect>
      <Select
        className="basic-multi-select"
        classNamePrefix="select"
        defaultValue={null}
        isMulti
        isClearable={true}
        isSearchable={true}
        autoFocus={true}
        styles={style}
        options={dataType.results.map(unit => ({
          value: unit.id,
          label: unit.n3
            ? unit.n1 + ' ' + unit.n2 + ' ' + unit.n3
            : unit.n2
            ? unit.n1 + ' ' + unit.n2
            : unit.n1
            ? unit.n1
            : unit.name,
        }))}
        onChange={target =>
          dispatch(setValue(target[0] ? target : ''))
        }></Select>
    </StyledMultiSelect>
  )
}
