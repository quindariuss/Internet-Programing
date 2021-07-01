import { Heading } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Assignmentthree } from "./assignmentthree";
import { AssignmentTwo } from "./Assignment2";
import { AssignmentFour } from "./assignmentfour";

function About() {
  return <Heading>Hello World in about</Heading>;
}
function Users() {
  return <Heading>Hello World in users</Heading>;
}

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AssignmentTwo />
        </Route>
        <Route path="/users">
          <Assignmentthree />
        </Route>
        <Route path="/assignmentfour">
          <AssignmentFour />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
