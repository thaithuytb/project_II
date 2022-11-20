export const backgroundClo = (value: number) => {
  if (value <= 250) {
    return "#99dceb";
  } else if (value <= 350) {
    return "#127e97";
  }
  return "#4e699b";
};
