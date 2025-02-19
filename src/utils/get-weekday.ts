/**
 * @description Get the weekday name from a number
 * @module utils/get-weekday
 *
 * @param {number} day - Number of the day
 * @returns {string} Weekday name
 * @example
 * getWeekday(0) // 'segunda'
 */

const getWeekday = (day: number): string => {
  switch (day) {
    case 0:
      return "segunda";
    case 1:
      return "terca";
    case 2:
      return "quarta";
    case 3:
      return "quinta";
    case 4:
      return "sexta";
    case 5:
      return "sabado";
    case 6:
      return "domingo";
    default:
      return "";
  }
};

export default getWeekday;
