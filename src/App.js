import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';



function App() {
  return (
    <div className="App">
      <Message/>

      <Greet name="Babu" college="IIT">
        <p>this is children property</p>
      </Greet>

      <Greet name="Lohith" college="Boston">
        <button>click me</button>
      </Greet>

      <Greet name="Karan" college="Harward" />

      <Welcome name="Puneeth" alias="puni" />

    </div>

  );
}

export default App;
