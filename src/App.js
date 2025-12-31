import React from 'react';
import './App.css';
import Exs_Navbar from './components/Exs_Navbar';
import Exs_Hero from './components/Exs_Hero';
import Exs_Services from './components/Exs_Services';
import Exs_Projects from './components/Exs_Projects';
import Exs_About from './components/Exs_About';
import Exs_Contact from './components/Exs_Contact';
import Exs_Footer from './components/Exs_Footer';

function App() {
  return (
    <div className="Exs_app">
      <Exs_Navbar />
      <main>
        <Exs_Hero />
        <Exs_Services />
        <Exs_Projects />
        <Exs_About />
        <Exs_Contact />
      </main>
      <Exs_Footer />
    </div>
  );
}

export default App;
