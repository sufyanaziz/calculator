import "./style.scss";

import { connect } from "react-redux";

const Screen = (props: any) => {
  const { result, displayValue } = props.calc;

  return (
    <div className="screen">
      <div className="screen-operator">
        <p> = </p>
      </div>
      <div className="screen-payload">
        <p>{displayValue === "0" ? result : displayValue}</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  calc: state.calc,
});

export default connect(mapStateToProps)(Screen);
