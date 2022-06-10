

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Resume from './Components/Pages/Home/Resume';
import Projects from './Components/Pages/Home/Projects';
import Contact from './Components/Pages/Home/Contact';
import Skill from './Components/Pages/Home/Skill';
import Blogs from './Components/Pages/Blogs/Blogs';
import About from './Components/Pages/About/About';
import Navbar from './Components/Shared/Navbar';


function App() {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/resume' element={<Resume/>} ></Route>
        <Route path='/projects' element={<Projects/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/skill' element={<Skill/>} ></Route>
        <Route path='/blog' element={<Blogs/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
