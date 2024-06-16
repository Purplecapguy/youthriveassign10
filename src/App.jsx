import { useState } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact'
import Error from './pages/Error';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='shop' element={<Shop />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
