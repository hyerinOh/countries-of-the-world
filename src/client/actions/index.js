import * as types from "./ActionTypes";

export const searchCountryAction = searchValue => {
  return {
    type: types.SEARCH_COUNTRY,
    searchValue: searchValue
  };
};

export const setAscending = (fields, countryLists) => {
  return {
    type: types.ASCENDING,
    fields,
    countryLists
  };
};

export const setDescending = (fields, countryLists) => {
  return {
    type: types.DESCENDING,
    fields,
    countryLists
  };
};

export const getCountryList = countryLists => {
  return {
    type: types.COUNTRYLIST,
    countryLists
  };
};

export const deleteList = country => {
  return {
    type: types.DELETELIST,
    country
  };
};

export const addList = (value, countryLists) => {
  return {
    type: types.ADDLIST,
    value,
    countryLists
  };
};
