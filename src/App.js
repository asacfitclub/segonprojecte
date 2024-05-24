import logo from './logo.svg';
import rey1 from './images/rey_atanagildo.png';
import rey2 from './images/rey_ataulfo.png';

import './App.css';

function App() {

  function incrementar(e) {
    e.target.innerHTML = ++e.target.innerHTML;
  }

  return (
    <>
      <div className='caja' onClick={incrementar}>2</div>
      <button>Aceptar</button>
        <div> <img src={rey1}/> </div>
      <input className='campo'/>
    </>
  );
}

export default App;
