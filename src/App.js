import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
        <img src={logo} className="App-logo" alt="logo" />
        
     
     
    <div className = "button-container" >
      
      

    </div>
    <div className='react-benefits-container'>
      <h2> benefits of using react...</h2>
      <ol>
        <li>
             Component based Architectural
        </li>
        <li> Rich ecosystem and community</li>
        <li> Virtual DOM for Efficient updates</li>
        <li> Cross platform developemnt </li>
        <li> Strong community support</li>
      </ol>
    </div>
    <button className='button' >Get Started</button>
    </div>
  );
}

export default App;
