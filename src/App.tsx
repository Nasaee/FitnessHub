import './App.css';
import ContactUs from './components/ContactUs';
import Benefits from './components/Benefits';
import Hero from './components/Hero';
import HowItWork from './components/HowItWork';
import Navbar from './components/Navbar';
import TextSlide from './components/TextSlide';
import Featured from './components/Featured';
function App() {
  return (
    <main className='App'>
      <Navbar />
      <Hero />
      <TextSlide />
      <Benefits />
      <ContactUs />
      <HowItWork />
      <Featured />
      <TextSlide />
    </main>
  );
}
export default App;
