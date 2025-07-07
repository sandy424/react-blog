import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/pages/Header';
import Login from './component/pages/Login';
import Home from './component/pages/Home';
import Sign from './component/pages/Sign';
import Feed from './component/pages/Feed';
import PostWrite from './component/pages/PostWrite';
import Post from './component/pages/Post';
import Findid from './component/pages/Findid';
import Findpw from './component/pages/Findpw';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Sign' element={<Sign/>}/>
        <Route path='/Feed' element={<Feed/>}/>
        <Route path='/PostWrite' element={<PostWrite/>}/>
        <Route path='/Post' element={<Post/>}/>
        <Route path='/Findid' element={<Findid/>}/>
        <Route path='/Findpw' element={<Findpw/>}/>
      </Routes>
    </div>
  );
}

export default App;
