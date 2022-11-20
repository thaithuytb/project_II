export const backgroundFe = (value: number) => {
  if (value <= 0.5) {
    return "#99dceb";
  } else if (value <= 1) {
    return "#127e97";
  } else if (value <= 1.5) {
    return "#4e699b";
  } else {
    return "#6068df";
  }
};
