import './App.css';

import {BrowserRouter} from 'react-router-dom'
import Nav from './Components/Nav/Nav';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Nav/>
    </div>
    </BrowserRouter>
  );
}

export default App;
