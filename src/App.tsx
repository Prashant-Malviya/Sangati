import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './components/app/Layout';
import Dashboard from './components/app/Dashboard';
import Post from './components/app/Post';
import Friends from './components/app/Friends';
import Video from './components/app/Video';
import Audio from './components/app/Audio';
import Chat from './components/app/Chat';

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path='/app' element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path='my-posts' element={<Post />} />
        <Route path='friends' element={<Friends />} />
        <Route path='video-call' element={<Video />} />
        <Route path='audio-call' element={<Audio />} />
        <Route path='chat' element={<Chat />} />
      </Route>


    </Routes>
    
    </BrowserRouter>
  )
}

export default App





