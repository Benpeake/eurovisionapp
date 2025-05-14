import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Bingo from "./pages/Bingo";
import Table from "./pages/Table";
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <div className=''>
        <header className='flex flex-col'>
          <h1 className='text-heading text-white bg-pink px-4 py-4'>
            Eurovision25
          </h1>
        </header>
        <Nav />
      </div>
      {/* Routes */}
      <Routes>
        <Route
          path='/'
          element={
            <Home />
          }
        />
        <Route
          path='/table'
          element={
            <Table />
          }
        />
        <Route
          path='/bingo'
          element={
            <Bingo />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
