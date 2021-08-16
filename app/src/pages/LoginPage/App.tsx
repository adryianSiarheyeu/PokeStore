import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { LOGIN_REQUEST } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const { userInfo } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    dispatch(LOGIN_REQUEST({ email: "1998adrian98@gmail.com", password: "Adrik1998@" }));
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
