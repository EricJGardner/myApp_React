import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import MyName from './MyName';
import FunFact from './FunFact';
import LikeyThings from './LikeyThings';
import Name from './Name';

function App() {
  return (
    <div className="App">
      <h1>Yoyoyo, Mr. E in the house</h1>
      
      <MyComponent />
      <MyName />
      <Name customName="Lionel" />
      <Name customName="Billy" />
      <Name customName="Sheila" />
      <FunFact />
      <LikeyThings />
    </div>
  );
}

export default App;
