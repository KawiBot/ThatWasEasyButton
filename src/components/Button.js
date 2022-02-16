import React from "react";
import ReactAudioPlayer from "react-audio-player";
const Button = () => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="button-container">
          <div className=" img-custom">
            <img
              src={require("../images/button_img.png")}
              alt="Image of the that was easy button but, with the easy and staples labels stripped off."
              className="img"
            />
          </div>
          <span className="button-title">Card Title</span>
          <div className="audio">
            {/* Audio controller area */}
            <ReactAudioPlayer
              src={require("../audio/what_the_dog_doin.mp3")}
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
