import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/pages/Header';
import Login from './component/pages/Login';
import Home from './component/pages/Home';
import Sign from './component/pages/Sign';
import Feed from './component/pages/Feed';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Sign' element={<Sign/>}/>
        <Route path='/Feed' element={<Feed/>}/>
      </Routes>
    </div>
  );
}

export default App;
