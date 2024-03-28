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

export function hasNonEmptyObjects(objArray) {
  // expects an array of objects and returns true if an object contains all blank data
  for (const obj of objArray) {
    const allEmptyValues = Object.values(obj).every((value) => value === '');
    if (allEmptyValues) return true;
  }
  return false;
}

export function formatDate(dateString) {
  // Attempts to format a date string as Mmm YYYY
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  const options = { year: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-US', options);
}

export function formatPhoneNumber(phoneNumber) {
  // Attempts to format a phone number string as (XXX) XXX-XXXX
  const cleanedNumber = phoneNumber.replace(/\D/g, '');
  if (cleanedNumber.length !== 10) return phoneNumber;

  return `(${cleanedNumber.substring(0, 3)}) ${cleanedNumber.substring(3, 6)}-${cleanedNumber.substring(6)}`;
}
