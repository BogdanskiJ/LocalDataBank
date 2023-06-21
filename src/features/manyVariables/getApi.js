import {useDispatch} from 'react-redux'
import {
  apiLinkCategory,
  apiLinkGroup,
  apiLinkHead,
  apiLinkVariables,
} from '../links'

export const getCategory = async () => {
  try {
    const response = await fetch(`${apiLinkHead}${apiLinkCategory}`)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } catch (error) {
    return console.log('error in getCategory', error)
  }
}

export const getGroup = async categoryName => {
  try {
    const response = await fetch(`${apiLinkHead}${apiLinkGroup}${categoryName}`)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } catch (error) {
    return console.log('error in getGroup', error)
  }
}

export const getSubGroup = async groupName => {
  try {
    const response = await fetch(`${apiLinkHead}${apiLinkGroup}${groupName}`)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } catch (error) {
    return console.log('error in getSubGroup', error)
  }
}

export const getVariables = async subGroupName => {
  try {
    const response = await fetch(
      `${apiLinkHead}${apiLinkVariables}${subGroupName}`,
    )
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } catch (error) {
    return console.log('error in getVariables', error)
  }
}

export const getFinalData = async (
  variablesName,
  selectedUnit,
  selectedUnitLevel,
) => {
  try {
    console.log('variablesName', variablesName)
    console.log('selectedUnitLevel', selectedUnitLevel)
    // const variablesNames = `var-id=${variablesName.value}`

    const response = await fetch(
      selectedUnitLevel === '0' || selectedUnitLevel === '2'
        ? `${apiLinkHead}/data/by-variable/${variablesName.value}?unit-level=${selectedUnitLevel}&page=0&page-size=100`
        : `${apiLinkHead}/data/by-variable/${variablesName.value}?unit-level=${selectedUnitLevel}&unit-parent-id=${selectedUnit}&page=0&page-size=100`,
    )

    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } catch (error) {
    return console.log('error in getFinalData', error)
  }
}

// https://bdl.stat.gov.pl/api/v1/data/by-variable/148190?unit-level=0&page=0&page-size=100
// ostateczne zapytanie dla Polski

// zapytanie dla województw - wyświetlają się województwa
// https://bdl.stat.gov.pl/api/v1/data/by-variable/148190?unit-level=2&page=0&page-size=100

// wybierając województwo - lista powiatów z danymi
//https://bdl.stat.gov.pl/api/v1/data/by-variable/148190?unit-parent-id=012400000000&unit-level=5&page=0&page-size=100

// wybierając powiat - lista gmin z danymi
// https://bdl.stat.gov.pl/api/v1/data/by-variable/148190?unit-parent-id=012414402000&unit-level=6&page=0&page-size=100
