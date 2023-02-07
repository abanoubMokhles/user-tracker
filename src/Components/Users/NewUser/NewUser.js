import React, { useState } from "react";
import Card from "../../UI/Card";
import styles from "./NewUser.module.scss";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal/Modal";
const NewUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [modelContent, setModelContent] = useState({ title: "", message: "" });

  const submitHandler = (evt) => {
    evt.preventDefault();

    // Validation
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsHidden(false);
      setModelContent({
        title: "Username, Age Error",
        message: "Please fill username and age inputs",
      });
      return;
    }
    if (enteredAge < 1) {
      setIsHidden(false);
      setModelContent({ title: "Age Error", message: "Age must be > 1" });
      return;
    }

    // lift user up
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (evt) => {
    setEnteredUsername(evt.target.value);
  };
  const ageChangeHandler = (evt) => {
    setEnteredAge(evt.target.value);
  };

  const onCloseHandler = () => {
    setIsHidden(true);
  };
  return (
    <div>
      {!isHidden && (
        <Modal
          title={modelContent.title}
          message={modelContent.message}
          onClose={onCloseHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username ({enteredUsername})</label>
          <input
            value={enteredUsername}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age ({enteredAge})</label>
          <input
            value={enteredAge}
            id="age"
            type="number"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default NewUser;
