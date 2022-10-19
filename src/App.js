import './App.css';
import Arrivalsscetion from './Components/ArrivalsSection/Arrivalsscetion';
import DesignSection from './Components/DesignSection/DesignSection';
import MySliders from './Components/Slider/MySliders';
import BackImage from './Components/BackgroundSection/BackImage';
import FetureProductSection from './Components/FetureProductSection/FetureProductSection';
import BlogSection from './Components/BlogSection/BlogSection';
import Logo from './Components/Logo/Logo';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import {Link} from 'react-scroll'
import { useEffect, useState } from 'react';
function App() {
  const [showbutton, setshowbutton] = useState(false)


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setshowbutton(true)
      } else {
        setshowbutton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <Nav/>
     <MySliders/>
     <DesignSection/>
     <Arrivalsscetion/>
     <BackImage/>
     <FetureProductSection/>
     <BlogSection/>
     <Logo/>
     <Contact/>
     <Footer/>
     {showbutton && (
      <button 
      onClick={scrollToTop} 
      className='scroll-to-top'>
        <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
      </button>
     )}
    </div>
  );
}

export default App;
