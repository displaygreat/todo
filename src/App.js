import React from "react";
import Title from "./components/title/title";
import ToDo from "./containers/todo/todo";

const App = () => (
  <>
    <Title title="ToDo App" />
    <ToDo />
  </>
);

export default App;
