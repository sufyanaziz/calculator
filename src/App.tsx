import "./assets/global.scss";

import Header from "./components/Header";
import Screen from "./components/Screen";
import Act from "./components/Act";

const App = () => {
  return (
    <div className="app-container">
      <div className="calculator">
        <Header />
        <Screen />
        <Act />
      </div>
    </div>
  );
};

export default App;
