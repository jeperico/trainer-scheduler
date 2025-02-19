/**
 * @description Format time to HH:MM
 * @module utils/format-time
 *
 * @param {number} hours - Hours to format
 * @param {number} minutes - Minutes to format
 * @returns {string} Formatted time
 * @example
 * formatTime(9, 30) // '09:30'
 */

const formatTime = (hours: number, minutes: number): string => {
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
};

export default formatTime;
