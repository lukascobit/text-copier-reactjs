
import './App.css';
import Calculator from './components/Calculator';
import {AiOutlineCalculator} from 'react-icons/ai'

function App() {
  return (
    <div className="App">
      <h1 className="logo">Calculator <AiOutlineCalculator className="icons"/></h1>
      <Calculator/>
    </div>
  );
}

export default App;
