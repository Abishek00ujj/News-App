import React from 'react';
import Header from './components/Header';
import Newspage from './components/Newspage';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import NewsX from './components/NewsX';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Newspage/>}/>
      <Route path={'/newsx'} element={<NewsX/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
