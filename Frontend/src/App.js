import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import List from "./pages/List";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/hotels" element={<List />}/>
          <Route path="/hotels/:id" element={<Hotel />}/>
          <Route path="/login" element={<Login />}/>
            
          
      </Routes> 
      </Router>   
    </div>
  );
}

export default App;
