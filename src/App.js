import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import React, { useEffect } from "react";
const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <>
      <div className="container" style={fullVH}>
        <a
          href="#add-button-modal"
          className="waves-effect waves-light btn-large"
          style={centerBtn}
        >
          Add Button
        </a>
      </div>
    </>
  );
};
const centerBtn = {};
const fullVH = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  margin: "auto",
  height: "100vh",
};

export default App;
