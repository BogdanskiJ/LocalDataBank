import {
  apiLinkCategory,
  apiLinkGroup,
  apiLinkHead,
  apiLinkVariables,
} from '../../common/Links'

export const getCategory = async () => {
  try {
    const response = await fetch(`${apiLinkHead}${apiLinkCategory}`)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } catch (error) {
    return console.log('error', error)
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
    return console.log('error', error)
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
    return console.log('error', error)
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
    return console.log('error', error)
  }
}

export const getFinalData = async (
  variablesName,
  selectedUnit,
  selectedUnitLevel,
) => {
  try {
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
    return console.log('error', error)
  }
}
