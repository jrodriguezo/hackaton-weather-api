import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import WeatherResults from "./pages/WeatherResults";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Home} path="/" />
        <Route component={WeatherResults} path="/search/:keyword" />
        {/* <Route component={ErrorPage} path="/:rest*" /> */}
      </Switch>
    </div>
  );
}

export default App;
