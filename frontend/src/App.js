import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Routers from "./Routers";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routers />
      </Router>
    </>
  );
}

export default App;
