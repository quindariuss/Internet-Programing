import { Heading } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Assignmenttwo } from "./assignmenttwo";

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
          <About />
        </Route>
        <Route path="/users">
          <Assignmenttwo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
