import React from 'react';
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home';
import Popular from './pages/popular';
import Upcoming from './pages/upcoming';
import Toprated from './pages/top_rated';
import Header from './components/header'
import Movie from './components/Movie';






function App() {
  return (
 <div className='App'>
  <BrowserRouter>
  <Header />
  <Routes>
      <Route index element={<Home />} ></Route>
      <Route path="movie/:id" element={<Movie />}></Route>
      <Route path="movie/popular" element={<Popular />}></Route>  
      <Route path="movie/top_rated" element={<Toprated/>}></Route> 
      <Route path="movie/upcoming" element={<Upcoming />}></Route> 
      <Route path="/*" element={<h1>404..</h1>}/>
  </Routes>
  </BrowserRouter>
 </div>
  );
}

export default App;