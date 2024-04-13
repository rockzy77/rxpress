import './App.css';
import { NavBar } from './components/NavBar';
import './css/Home.css';
import './css/NavBar.css';
import './css/Footer.css';
import './css/Shop.css';


import { CustomRouter } from './router/Router';

function App() {
  return (
    <div>
      <NavBar />
      <div style={{
        height: 69
      }}></div>
      <CustomRouter />
    </div>
  );
}

export default App;
