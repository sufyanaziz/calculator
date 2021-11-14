/* eslint no-eval: 0 */
import "./style.scss";

import { actData } from "../../data";
import ButtonAction from "../Button";

import { connect } from "react-redux";
import {
  setCalculation,
  doCalculation,
  removeCalculation,
} from "../../store/action/calculatorAct";

import useLocalStorage from "../../hooks/useLocalStorage";
import React from "react";

const Act = (props: any) => {
  const { setCalculation, removeCalculation, doCalculation } = props;
  const { payload } = props.calc;
  const [calcVal, setCalcVal] = useLocalStorage("calc-payload", "0");

  React.useEffect(() => {
    setCalculation(calcVal.toString(), "number");
  }, []);

  const handleCalculation = (value: string | number, type: string) => {
    if (value === "clear") {
      removeCalculation();
      setCalcVal("0");
    } else if (value === "=") {
      doCalculation();
      const result = eval(payload);
      setCalcVal(result.toString());
    } else {
      setCalculation(value.toString(), type);
    }
  };

  const isDisabledFunc = (value: string | number) => {
    const splitPayload = payload.split(" ");
    if (value === "=") {
      if (splitPayload[splitPayload.length - 1] === "") {
        return true;
      } else return false;
    } else if (value === "+/-") {
      if (splitPayload[splitPayload.length - 1] === "") {
        return true;
      } else return false;
    } else if (value === "%") {
      if (splitPayload.length === 1) {
        return false;
      } else return true;
    } else {
      return false;
    }
  };

  return (
    <div className="act">
      {actData.map((data) => {
        return (
          <ButtonAction
            key={data.name}
            value={data.value}
            className={data.className}
            name={data.name}
            onClick={() => handleCalculation(data.value, data.type)}
            disabled={isDisabledFunc(data.value)}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  calc: state.calc,
});

const mapActionToProps = { setCalculation, removeCalculation, doCalculation };

export default connect(mapStateToProps, mapActionToProps)(Act);
