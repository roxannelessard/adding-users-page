import React, { useState } from 'react';
import { AddUser } from './components/Users/AddUser';
import { UsersList } from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  // this function serve to lift the state up!
  const addUserHandler = (userName, userAge) => {
    // because this depends on a previous state, we need to pass a function
    setUsersList((previousUsersList) => {
      return [...previousUsersList, {name: userName, age: userAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
