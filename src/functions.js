export function hasNonEmptyObjects(array) {
  // inputData should be formatted as an array of objects
  // returns true if the objects contain non-empty data input
  for (const obj of array) {
    const allEmptyValues = Object.values(obj).every((value) => value === '');
    if (allEmptyValues) {
      return true;
    }
  }

  return false;
}
