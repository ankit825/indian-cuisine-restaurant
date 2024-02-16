import React, { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  if (!open) {
    return null;
  }
  return (
    <div
      className={styles.modalWrapper}
      onClick={() => {
        // close modal when outside of modal is clicked
        onClose();
      }}
    >
      <div
        className={styles.modal}
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <button
          onClick={onClose}
          className={`${styles.btnClose} btn-close`}
        ></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
