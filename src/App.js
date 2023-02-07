import React, { useState } from "react";
import NewUser from "./Components/Users/NewUser/NewUser";
import UsersList from "./Components/Users/UsersList/UsersList";

function App() {
  const [users, setUser] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUser((prevState) => {
      return [
        ...prevState,
        { username: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
