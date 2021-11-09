import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';



function App() {
  return (
    <div className="App">
    <Greet name = "Babu" college = "IIT">
      <p>this is children property</p>
    </Greet>
    <Greet name = "Lohith" college = "Boston"/>
    <Greet name = "Karan" college = "Harward"/>

    <Welcome/>

    </div>    
    
  );
}

export default App;
