import React from "react";
import "../../css/butterflyAnimation.css";

function Butterflyanimation() {
  return (
    <div id="containter">
      <div id="butterfly">
        <div id="body">
          <div id="head"></div>
          <div id="left_wing">
            <div id="top"></div>
            <div dir="bottom"></div>
          </div>
          <div id="right_wing">
            <div id="top"></div>
            <div dir="bottom"></div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Butterflyanimation;
