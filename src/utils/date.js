export const getDay = (date) => {
  return new Date(date).getDate()
};

export const getWeekday = (date) => {
  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
    new Date(date).getDay()
  ];
};
