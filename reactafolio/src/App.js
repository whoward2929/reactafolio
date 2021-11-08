
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}




export default App;
