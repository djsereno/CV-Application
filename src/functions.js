export function textToArray(text) {
  // takes a plain-text list (with or without plain-text bullets) and
  // returns an array containing each bullet point
  const items = text.split('\n').filter((item) => item.trim() !== '');

  const itemArray = items.map((item) => {
    const trimmedItem = item.trim();
    if (trimmedItem.startsWith('-')) return trimmedItem.slice(1).trim();
    return trimmedItem;
  });

  return itemArray;
}

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

export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short' };
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date';

  return date.toLocaleDateString('en-US', options);
}
