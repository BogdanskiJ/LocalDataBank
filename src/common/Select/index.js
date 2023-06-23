import {useDispatch} from 'react-redux'
import Select from 'react-select'
import {StyledMultiSelect, StyledSelect} from './styled'

export const SelectOneVariable = ({dataType, setValue}) => {
  const dispatch = useDispatch()

  const isSearchable = () => {
    let searchable = true
    let windowOrientation = window.orientation
    windowOrientation !== undefined ? (searchable = false) : (searchable = true)
    return searchable
  }

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
    menu: styles => ({
      ...styles,
      menuShouldBlockScroll: true,
    }),
    menuList: styles => ({
      ...styles,
      menuShouldScrollIntoView: true,
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
        menuShouldScrollIntoView={true}
        isSearchable={isSearchable()}
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
        onChange={target => dispatch(setValue(target))}></Select>
    </StyledSelect>
  )
}

export const SelectManyVariables = ({dataType, setValue}) => {
  const dispatch = useDispatch()

  const isSearchable = () => {
    let searchable = true
    let windowOrientation = window.orientation
    windowOrientation !== undefined ? (searchable = false) : (searchable = true)
    return searchable
  }

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
      ...styles,
      display: 'flex',
      flexDirection: 'row',
      width: 'auto',
      textAlign: 'center',
      maxWidth: '100%',
    }),
    multiValueLabel: styles => ({
      ...styles,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      whiteSpace: 'wrap',
    }),
    valueContainer: styles => ({
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
        menuShouldScrollIntoView={true}
        placeholder="Wybierz"
        isMulti
        isClearable={true}
        isSearchable={isSearchable()}
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

export const SelectRegionName = ({poland, setProvinceName}) => {
  const dispatch = useDispatch()

  const isSearchable = () => {
    let searchable = true
    let windowOrientation = window.orientation
    windowOrientation !== undefined ? (searchable = false) : (searchable = true)
    return searchable
  }

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
      isSearchable={isSearchable()}
      options={poland.map(province => ({
        value: province.id,
        label: province.name,
      }))}
      onChange={target => dispatch(setProvinceName(target.label))}></Select>
  )
}

export const SelectProvinceName = ({provinces, setSelectedMap}) => {
  const dispatch = useDispatch()

  const isSearchable = () => {
    let searchable = true
    let windowOrientation = window.orientation
    windowOrientation !== undefined ? (searchable = false) : (searchable = true)
    return searchable
  }

  const options = ({provinces}) => {
    return provinces.map(province => ({
      value: province.id,
      label: province.name,
    }))
  }

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
        label: 'Wybierz powiat',
      }}
      isClearable={false}
      isSearchable={isSearchable()}
      options={options({provinces})}
      onChange={target =>
        dispatch(setSelectedMap([target.label, target.value, null]))
      }></Select>
  )
}
