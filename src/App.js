import './App.css';
import Navbarlist from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Shop';
function App() {
  return (
    <>
      <Navbarlist />

    <div className="container">
      <Shop />
      </div>
      </>
  );
}

export default App;
  