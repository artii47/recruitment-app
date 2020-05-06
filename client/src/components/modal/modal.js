import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import "./modal.css";

const Modal = ({ header, modalContent }) => {
  const history = useHistory();
  return ReactDOM.createPortal(
    <div onClick={() => history.push("/")} className="modal-container">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <h1>{header}</h1>
        <div className="modal-content">{modalContent}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
