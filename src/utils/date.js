export const getDay = (date) => {
  return new Date(date).getDate()
};

export const getWeekday = (date) => {
  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
    new Date(date).getDay()
  ];
};

export const getLongWeekday = (date) => {
  return ["SUNNY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"][
    new Date(date).getDay()
  ];
};

export const getHour = (date) => {
  return date.split(' ')[1]
}