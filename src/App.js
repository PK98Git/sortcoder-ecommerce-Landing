import React,{useEffect} from 'react'
import './App.css';
import Blog from './Components/Blog';
import Category from './Components/Category';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Main from './Components/Main';
import { Product } from './Components/Product';
import Testimonial from './Components/Testimonial';
function App() {

  //Develope and Create by Sortcoder Team
  return (
    <div className="App">
      <Header />
      <Hero />
      <Product />
      <Category />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
