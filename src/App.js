import './App.css';
import Arrivalsscetion from './Components/ArrivalsSection/Arrivalsscetion';
import DesignSection from './Components/DesignSection/DesignSection';
import MySliders from './Components/Slider/MySliders';
import BackImage from './Components/BackgroundSection/BackImage';
import FetureProductSection from './Components/FetureProductSection/FetureProductSection';
import BlogSection from './Components/BlogSection/BlogSection';
import Logo from './Components/Logo/Logo';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
     <MySliders/>
     <DesignSection/>
     <Arrivalsscetion/>
     <BackImage/>
     <FetureProductSection/>
     <BlogSection/>
     <Logo/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
