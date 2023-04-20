import { apiLinkCategory, apiLinkGroup, apiLinkHead, apiLinkVariables } from "../links";

export const getCategory = async () => {
  try {
    const response = await fetch(`${apiLinkHead}${apiLinkCategory}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    };
    return await response.json();

  } catch (error) {
    console.log(error);
  };
};

export const getGroup = async (categoryName) => {
  try {
    const response = await fetch(`${apiLinkHead}${apiLinkGroup}${categoryName}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    };
    return await (response.json());

  } catch (error) {
    console.log(error);
  };
};

export const getSubGroup = async (groupName) => {
  try {
    const response = await fetch(`${apiLinkHead}${apiLinkGroup}${groupName}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    };
    return await (response.json());

  } catch (error) {
    console.log(error);
  };
};

export const getVariables = async (subGroupName) => {
  try {
    const response = await fetch(`${apiLinkHead}${apiLinkVariables}${subGroupName}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    };
    return await (response.json());

  } catch (error) {
    console.log(error);
  };
};

export const getFinalData = async (varaiblesName, selectedUnit) => {
  try {
    const response = await fetch(`${apiLinkHead}/data/by-unit/${selectedUnit}?var-id=${varaiblesName}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    };
    return await (response.json());

  } catch (error) {
    console.log(error);
  };
};