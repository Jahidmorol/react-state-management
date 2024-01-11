import React, { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({ name: "", age: 0, hobbies: [] });

  console.log(user);

  return (
    <form>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="border m-5 border-purple-300"
        name="name"
        id="name"
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
        className="border m-5 border-purple-300"
        name="age"
        id="age"
        type="number"
        placeholder="age"
      />
      <input
        onBlur={(e) =>
          setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
        }
        className="border m-5 border-purple-300"
        name="hobbies"
        id="hobbies"
        type="text"
        placeholder="hobbies"
      />
    </form>
  );
};

export default UserInfoWithUseState;
