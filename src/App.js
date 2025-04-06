import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Login from './component/Login';
import Mypage from './component/Mypage';
import Diary from './component/Diary';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Mypage' element={<Mypage/>}/>
        <Route path='/Diary' element={<Diary/>}/>
      </Routes>
    </div>
  );
}

export default App;
