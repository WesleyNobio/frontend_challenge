import React from 'react';
import './style.css';

import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="react">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
