import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.hideSettingsHandler} />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <div className={props.className}>
      {createPortal(
        <Backdrop hideSettingsHandler={props.hideSettingsHandler} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </div>
  );
};

export default Modal;
