import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddButtonModal from "./components/AddButtonModal";
const App = () => {
  const [button, setButton] = useState([]);

  async function getButtons() {
    try {
      const response = await axios.get("/buttons");
      setButton(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    M.AutoInit();
    getButtons();
  }, []);
  return (
    <>
      <div className="container">
        <a
          href="#add-button-modal"
          className="waves-effect waves-light btn-large"
        >
          Add Button
        </a>
      </div>
    </>
  );
};
const fullVH = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  margin: "auto",
  height: "100vh",
};

export default App;
