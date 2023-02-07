import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button";
import Card from "../Card";

const Modal = (props) => {
  const clickHandler = () => {
    props.onClose();
  };
  return (
    <div>
      <div className={styles.backdrop} onClick={clickHandler}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={clickHandler}>Got it</Button>
        </footer>
      </Card>
    </div>
  );
};
export default Modal;
