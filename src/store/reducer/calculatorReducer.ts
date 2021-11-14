/* eslint no-eval: 0 */
import { actionTypes } from "../store-types";

import { checkOperator } from "../../func/convert";

const initialState = {
  result: "0",
  payload: "0",
  displayValue: "0",
  isCalculating: false,
};

const reducers = (state = initialState, action: actionTypes) => {
  const setValueCalc = (number: string, type: string) => {
    if (type === "operator" && number !== "+/-") {
      if (
        checkOperator(state.payload[state.payload.length - 2]) === false ||
        checkOperator(state.payload[0])
      ) {
        return {
          payload: state.payload.concat(` ${number} `),
          result: "0",
          displayValue: state.result,
        };
      } else {
        return {
          payload: state.payload,
          result: "0",
          displayValue: state.displayValue,
        };
      }
    } else if (type === "positive/negative") {
      let resultState =
        state.result[0] === "-"
          ? state.result.substr(1, state.result.length)
          : `-${state.result}`;

      let payloadState;

      const splitPayload = state.payload.split(" ");
      if (splitPayload[splitPayload.length - 1] !== "") {
        payloadState = splitPayload
          .map((num, i) => {
            if (i === splitPayload.length - 1) {
              return num[0] === "-" ? num.substr(1, num.length) : `-${num}`;
            }
            return num;
          })
          .join(" ");
      } else {
        payloadState = state.payload;
      }

      return {
        result: resultState.replace(/^0+(?!\.|$)/, ""),
        payload: payloadState.replace(/^0+(?!\.|$)/, ""),
      };
    } else if (number === "%") {
      return {
        result: eval(`${state.result}/100`).toString(),
        payload: eval(`${state.payload}/100`).toString(),
      };
    } else {
      // for display result remove multiple 0 and .
      const result = state.result
        .concat(number)
        .split(" ")
        .map((num) => {
          const tempNum: any[] = [];
          num.split("").forEach((n) => {
            if (tempNum.indexOf(".") === -1) {
              tempNum.push(n);
            } else if (tempNum.indexOf(".") !== -1 && n !== ".") {
              tempNum.push(n);
            }
          });
          return tempNum.join("").replace(/^0+(?!\.|$)/, "");
        })
        .join(" ");
      // for display payload remove multiple 0 and .
      const payload = state.payload
        .concat(number)
        .split(" ")
        .map((num) => {
          const tempNum: any[] = [];
          num.split("").forEach((n) => {
            if (tempNum.indexOf(".") === -1) {
              tempNum.push(n);
            } else if (tempNum.indexOf(".") !== -1 && n !== ".") {
              tempNum.push(n);
            }
          });
          return tempNum.join("").replace(/^0+(?!\.|$)/, "");
        })
        .join(" ");

      return {
        result,
        payload,
        displayValue: "0",
      };
    }
  };

  switch (action.type) {
    case "SET_CALCULATION":
      return {
        ...state,
        ...setValueCalc(action.payload.number, action.payload.types),
        isCalculating: true,
      };
    case "DO_CALCULATION":
      return {
        ...state,
        payload: eval(state.payload).toString(),
        result: eval(state.payload).toString(),
        displayValue: "0",
        isCalculating: eval(state.payload).toString() === "0" ? false : true,
      };
    case "REMOVE_CALCULATION":
      return {
        ...state,
        result: "0",
        payload: "0",
        displayValue: "0",
        isCalculating: false,
      };
    default:
      return state;
  }
};

export default reducers;
