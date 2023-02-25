import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route path="Checkout" element={<Checkout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
