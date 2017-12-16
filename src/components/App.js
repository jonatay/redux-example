import React from "react";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer";

const App = () => (
  <div style={{ fontSize: 24 }}>
    <AddTodo />
    <VisibleTodoList/>
    <Footer />
  </div>
);

export default App;
