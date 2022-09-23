import { BrowserRouter, BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Cards from './component/cards';
import CardsDetails from './component/cardDetails';
import Page from './component/page';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Cards/>} />
      <Route path='/cart/:id' element={<CardsDetails/>} />
      <Route path='/page' element={<Page/>} />
    </Routes>
    </BrowserRouter>    
    </>
    );
}

export default App;
