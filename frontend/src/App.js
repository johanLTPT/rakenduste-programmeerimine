//import logo from './logo.svg';
import { Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='add-item' >
        <div>Pole veel valmis</div>
      </Route>
    </div>
  );
}

export default App;
