/**
 * @description Format a slug to a string
 * @module utils/format-slug
 *
 * @param {string} slug - Slug to format
 * @returns {string} Formatted slug
 * @example
 * formatSlug('Hello World') // 'hello-world'
 */

const formatSlug = (slug: string): string => {
  if (slug === undefined) return "";

  return slug
    .replace(/ /g, "-")
    .replace(/[çÇ]/g, "c")
    .replace(/[áàâãä]/g, "a")
    .replace(/[éèêë]/g, "e")
    .replace(/[íìîï]/g, "i")
    .replace(/[óòôõö]/g, "o")
    .replace(/[úùûü]/g, "u")
    .replace(/[ñ]/g, "n")
    .toLowerCase();
};

export default formatSlug;
