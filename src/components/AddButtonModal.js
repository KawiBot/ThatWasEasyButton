import React from "react";

const AddButtonModal = () => {
  return (
    <div id="add-button-modal" className="modal">
      <div className="modal-content">
        <h4>Enter Button Name: </h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect waves-light blue btn"
        ></a>
      </div>
    </div>
  );
};

export default AddButtonModal;
