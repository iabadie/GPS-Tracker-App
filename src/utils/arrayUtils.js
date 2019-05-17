import Immutable from 'seamless-immutable';
import flatten from 'lodash/flatten';
import isObject from 'lodash/isObject';
import merge from 'lodash/merge';

/**
 * Receives an array of strings, and returns an obj with that strings as properties with that string as value.
 * E.G:
 * stringArrayToObject(['A', 'B', 'C']) // { A: 'A', B: 'B', C: 'C' }
 */
export function stringArrayToObject(actionsArray, namespace) {
  if (actionsArray.some(actionName => !actionName || typeof actionName !== 'string')) {
    throw new Error('Action names must be strings and must not be empty');
  }
  return Immutable(actionsArray).asObject(actionName => [
    actionName,
    namespace ? `${namespace}:${actionName}` : actionName
  ]);
}

export function mergeObjects(roles) {
  const merger = (a, b) => {
    if (isObject(a)) {
      return merge({}, a, b, merger);
    }
    return a || b;
  };
  const args = flatten([{}, roles, merger]);
  return merge(...args);
}

export function arrayToObject(arr) {
  const obj = {};
  arr.forEach((elem, i) => (obj[i] = elem));
  return obj;
}

export function stringFromArray(arr) {
  if (arr && arr.length > 0) {
    return arr.reduce((acc, item) => `${acc},${item}`);
  }
  return '';
}

// This function find the index of the element that contains the id.
// If find it, replace the element, else return the original list
export const replaceElementById = (list, element, id) => {
  const index = list.findIndex(item => item.id === id);
  return index !== -1
    ? list
        .slice(0, index)
        .concat(element)
        .concat(list.slice(index + 1, list.length))
    : list;
};

// This function maps a Javascript object onto string api params
// Example: { days: [1,2,4], name: "Juan" } maps to `days=[1,2,4]&name=Juan`
export function apiString(obj) {
  if (obj instanceof Array) {
    return `[${stringFromArray(obj)}]`;
  }

  if (obj instanceof Object) {
    return Object.keys(obj)
      .map(key => `${key}=${apiString(obj[key])}`)
      .reduce((acc, item) => `${acc}&${item}`);
  }
  return obj;
}

export function updateList(list, newItem, isEqual = item => item.id === newItem.id) {
  const index = list.findIndex(isEqual);
  if (index !== -1) {
    return list
      .slice(0, index)
      .concat(newItem)
      .concat(list.slice(index + 1));
  }
  return list;
}
