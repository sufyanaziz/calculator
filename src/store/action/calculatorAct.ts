import { TypeAction } from "../store-types";

export const setCalculation =
  (number: string, types: string) =>
  (dispatch: (arg0: { type: TypeAction; payload?: any }) => void) => {
    dispatch({ type: "SET_CALCULATION", payload: { types, number } });
  };

export const doCalculation =
  () => (dispatch: (arg0: { type: TypeAction; payload?: any }) => void) => {
    dispatch({ type: "DO_CALCULATION" });
  };

export const removeCalculation =
  (number: string) =>
  (dispatch: (arg0: { type: TypeAction; payload?: any }) => void) => {
    dispatch({ type: "REMOVE_CALCULATION" });
  };
