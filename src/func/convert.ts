export const convertNum = (payload: any) => {
  return payload;
};

export const checkOperator = (operator: string) => {
  if (
    operator === "-" ||
    operator === "+" ||
    operator === "%" ||
    operator === "/" ||
    operator === "*" ||
    operator === "="
  ) {
    return true;
  } else return false;
};
