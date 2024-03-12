// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SecNav from './components/SecNav';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';


function App() {
  return (
    <>
      <Navbar logo="Code16" />
      <SecNav />
      <Hero />
      <div className="text-center"><Section2/><Section3/><Section4/></div>
      
    </>
  );
}

export default App;
