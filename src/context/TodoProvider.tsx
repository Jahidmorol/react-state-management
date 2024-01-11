import React, { ReactNode, createContext, useReducer } from "react";

export const TodoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

export type TTodo = {
  id: string;
  title: string;
  isComplete: boolean;
};

type TAction = {
  type: string;
  payload: TTodo | string;
};

type TodoProviderProps = {
  children: ReactNode;
};

const typeConstants = {
  Add_Todo: "addTodo",
  Task_Complete: "taskComplete",
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case typeConstants.Add_Todo:
      return [...currentState, action.payload];

    case typeConstants.Task_Complete:
      return currentState.map((item) =>
        item.id === action.payload
          ? { ...item, isComplete: !item.isComplete }
          : item
      );

    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state,
    dispatch,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
