import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import React, { useEffect } from "react";
const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return <div className="container">Hello World!</div>;
};

export default App;
