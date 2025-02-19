/**
 * @description Format date to YYYY-MM-DD
 * @module utils/format-date
 *
 * @param {Date} date - Date to format
 * @returns {string} Formatted date
 * @example
 * formatDate(new Date('2021-01-01')) // '2021-01-01'
 */

const formatDate = (date: Date): string => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
};

export default formatDate;
