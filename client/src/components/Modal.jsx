import React from "react";

export default function Modal(props){
  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>{props.heading}</h1>
          <button className="modal-btn" onClick={props.toggle}>
            <p>X</p>
          </button>
        </div>
          {props.content}
      </div>
    </div>
  );
};

