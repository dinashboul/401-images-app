import './App.css';
import Parent from './components/Parent.js'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header/>
      <Router>
          <Routes>
            <Route 
              exact path="/"
              element={<Parent />}
            
            >
            
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;