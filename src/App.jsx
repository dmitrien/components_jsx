import './App.css'
import { ItemInfo } from './components/ItemInfo/ItemInfo';

function App() {

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ItemInfo />
      </div>
    </div>
  );
}

export default App
