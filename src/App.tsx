import './App.css';
import ContactUs from './components/ContactUs';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TextSlide from './components/TextSlide';
function App() {
  return (
    <main className='App'>
      <Navbar />
      <Hero />
      <TextSlide />
      <Features />
      <ContactUs />
    </main>
  );
}
export default App;
