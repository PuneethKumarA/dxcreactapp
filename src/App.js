import logo from './logo.svg';
import './App.css';

import RefsDemo from './components/refs/RefsDemo';
import FocusInput from './components/refs/FocusInput';
import Input from './components/refs/Input';




function App() {
  return (
    <div className="App">
      <FocusInput/>
      <Input/>
      <RefsDemo/>

    </div>

  );
}

export default App;
