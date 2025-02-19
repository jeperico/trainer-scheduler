/**
 * @description Format a date to a string in the format dd/mm/yyyy
 * @module utils/format-day
 *
 * @param {Date} date - Date to format
 * @returns {string} Formatted date
 * @example
 * formatDay(new Date('2021-01-01')) // '01/01/2021'
 */

const formatDay = (date: Date): string => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 1);

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`;
};

export default formatDay;
