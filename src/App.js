import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Login from './component/Login';
import Home from './component/Home';
import Sign from './component/Sign';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Sign' element={<Sign/>}/>
      </Routes>
    </div>
  );
}

export default App;
