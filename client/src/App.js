import React from "react";
import UserList from "./components/user-list/user-list";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import UserEdit from "./components/user-edit/user-edit";
import UserDelete from "./components/user-delete/user-delete";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/user/edit/:id" exact component={UserEdit} />
          <Route path="/user/delete/:id" exact component={UserDelete} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
