import React, { useState } from "react";
import Popup from "reactjs-popup";

const Modal = ({ details }) => {
  const [parent, setParent] = useState();

  return (
    <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      nested>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}></button>
          <div className="header"> Modal Title </div>
          {/* <form onSubmit={() => details(parent)}> */}

          <label>Gender</label>
          <div name="parent">
            <input
              type="radio"
              value="Male"
              onChange={(e) => setParent(e.target.value)}
              checked={parent === "Male"}
            />{" "}
            Male
            <input
              type="radio"
              value="Female"
              checked={parent === "Female"}
              onChange={(e) => setParent(e.target.value)}
            />{" "}
            Female
            <input
              type="radio"
              value="Other"
              checked={parent === "Other"}
              onChange={(e) => setParent(e.target.value)}
            />{" "}
            Other
          </div>
          <button type="submit" onClick={() => details(parent)}>
            Sub
          </button>
          {/* </form> */}
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}>
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
export default Modal;
