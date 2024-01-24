import './App.css';
import ContactUs from './components/ContactUs';
import Benefits from './components/Benefits';
import Hero from './components/Hero';
import HowItWork from './components/HowItWork';
import Navbar from './components/Navbar';
import TextSlide from './components/TextSlide';
import Featured from './components/Featured';
import Testimomials from './components/Testimomials';
import PersonalTrainer from './components/PersonalTrainer';
import BlogAndNews from './components/BlogAndNews';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <main className='App'>
        <Navbar />
        <Hero />
        <TextSlide />
        <Benefits />
        <ContactUs />
        <HowItWork />
        <Featured />
        <TextSlide />
        <Testimomials />
        <PersonalTrainer />
        <BlogAndNews />
      </main>
      <Footer />
    </>
  );
}
export default App;
