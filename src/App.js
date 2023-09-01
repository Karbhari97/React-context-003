import './App.css';
import Navbar from './Components/Navbar';
import { useContext } from 'react';
import ref from './ContextAPi/Data';

function App() {
  let {color,textcolor}=useContext(ref);
  return (
    <div className="App" style={{backgroundColor:{color},height:"100vh",color:{textcolor}}}>
      <Navbar />
    

    </div>
  );
}

export default App;
