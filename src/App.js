import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 
import './App.css';
import Sidenav from './Components/Sidenav';
// import Explore from "./Pages/Explore";
// import Home from "./Pages/Home";
// import Settings from "./Pages/Settings";
// import Statistics from "./Pages/Statistics";
import pages from "./Pages";
 
function App() {
  return (
    <div className="App">
      <Sidenav/>
      <main>
        <Routes>
          {pages.map(page => (
            <Route {...page.props} key={page.name} />
          ))}
        </Routes>
      </main>
    </div>
  );
}
export default App;