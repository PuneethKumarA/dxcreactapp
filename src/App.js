import logo from './logo.svg';
import './App.css';

import RefsDemo from './components/refs/RefsDemo';
import FocusInput from './components/refs/FocusInput';
import Input from './components/refs/Input';
import FrParentInput from './components/refs/FrParentInput';
import PortalDemo from './components/portals/PortalDemo';




function App() {
  return (
    <div className="App">
      <FrParentInput/>
      <PortalDemo/>
    </div>

  );
}

export default App;
