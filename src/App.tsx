
// style
import './App.css'
// component 
import { BrowserRouter, Route, Routes } from 'react-router'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Home from './pages/home/home'
import News from './pages/news/news'
import Services from './pages/services/services'
import Start from './pages/start/start'

function App() {
  return <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route  path='/start' element={<Start/>}/>
        <Route  path='/services' element={<Services/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/news' element={<News/>}/>
        <Route  path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
}

export default App
