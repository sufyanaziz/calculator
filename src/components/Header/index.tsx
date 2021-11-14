import "./style.scss";

import { connect } from "react-redux";

const Header = (props: any) => {
  const { payload } = props.calc;

  return (
    <div className="header">
      <p>{payload}</p>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  calc: state.calc,
});

export default connect(mapStateToProps)(Header);
