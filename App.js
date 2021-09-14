import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Com404 from "./Component/Com404"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Contact" component={Contact} />
          <Route path="/Home" component={Home} />
          <Route path="/"  exact component={Com404} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
