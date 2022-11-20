export const backgroundDo = (value: number) => {
  if (value >= 6) {
    return "#99dceb";
  } else if (value >= 5) {
    return "#127e97";
  } else if (value >= 4) {
    return "#4e699b";
  } else {
    return "#6068df";
  }
};
