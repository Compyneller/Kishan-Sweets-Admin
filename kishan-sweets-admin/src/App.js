import "./App.css";
import AppLayout from "./layout/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout />
      </Router>
    </div>
  );
}

export default App;
