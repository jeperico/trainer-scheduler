const formatDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 1);

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`;
};

export default formatDay;
