export type actionTypes = {
  type: "DO_CALCULATION" | "REMOVE_CALCULATION" | "SET_CALCULATION";
  payload: any;
};

export type TypeAction =
  | "DO_CALCULATION"
  | "REMOVE_CALCULATION"
  | "SET_CALCULATION";
