
import './App.css';
import Benefits from './component/react-benefits/Benefits';
import Logo from './component/react-logo/Logo';

import MyButton from './component/react-button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Logo />
<Benefits />
       <MyButton />

      </header>
    </div>
  );
}

export default App;
