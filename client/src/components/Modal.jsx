import React from "react";

export default function Modal({toggle}){
  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button className="modal-btn" onClick={toggle}>
            <p>X</p>
          </button>
        </div>
        <div className="rules">1: You will be given 4 words</div>
        <div className="rules">2: Use the words in the rap</div>
        <div className="rules">3: Try to make the rap rhyme</div>
      </div>
    </div>
  );
};

