import React, { useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };

    case "addAge":
      return { ...currentState, age: action.payload };

    case "addHobbies":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };

    default:
      return currentState;
  }
};

const UserInfoWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <form>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        className="border m-5 border-purple-300"
        name="name"
        id="name"
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        className="border m-5 border-purple-300"
        name="age"
        id="age"
        type="number"
        placeholder="age"
      />
      <input
        onBlur={(e) =>
          dispatch({ type: "addHobbies", payload: e.target.value })
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

export default UserInfoWithReducer;
