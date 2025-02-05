const getWeekday = (day: number) => {
  switch (day) {
    case 0:
      return "segunda";
    case 1:
      return "terça";
    case 2:
      return "quarta";
    case 3:
      return "quinta";
    case 4:
      return "sexta";
    case 5:
      return "sábado";
    case 6:
      return "domingo";
    default:
      return "";
  }
};

export default getWeekday;
