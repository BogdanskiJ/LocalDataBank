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
    const response = await fetch(
      `${apiLinkHead}${apiLinkGroup}${categoryName.value}`,
    )
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
    const response = await fetch(
      `${apiLinkHead}${apiLinkGroup}${groupName.value}`,
    )
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
      `${apiLinkHead}${apiLinkVariables}${subGroupName.value}`,
    )
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } catch (error) {
    return console.log('error in getVariables', error)
  }
}

export const getFinalData = async (variablesName, selectedUnit) => {
  try {
    const variablesNames = [...variablesName].map(
      variable => `var-id=${variable.value}`,
    )

    const response = await fetch(
      `${apiLinkHead}/data/by-unit/${selectedUnit}?${variablesNames.join('&')}`,
    )
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } catch (error) {
    return console.log('error in getFinalData', error)
  }
}
