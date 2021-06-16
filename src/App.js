import NavBar from "./components/layout/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/products" exact/>
        <Route path="/about-us" exact/>
        <Route path="/contact" exact/>
        <Route path="/" exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
