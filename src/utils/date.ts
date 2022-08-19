const d = new Date();
const currentYear = d.getFullYear();
const currentMonth = d.getMonth() + 1;
export const years = () => {
  const arrYears = [currentYear];
  for (let i = 1; i <= 100; i++) {
    arrYears.push(currentYear - i);
  }
  return arrYears;
};

export const months = () => {
  const getMonth = [];
  for (let i = 1; i <= 12; i++) {
    getMonth.push(i);
  }
  return getMonth;
};

export const days = () => {
  const getDays = [];
  const totalDayofMont = currentMonth === 2 ? 29 : 31;
  for (let i = 1; i <= totalDayofMont; i++) {
    getDays.push(i);
  }
  return getDays;
};
