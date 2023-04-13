import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
