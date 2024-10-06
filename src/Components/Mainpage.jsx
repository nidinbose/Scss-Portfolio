import React from 'react'
import '../Components/Scss/Mainpage.scss';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
const Mainpage = () => {
  return (
<>
<section id='Homepage'><Link to={``}>
 <Navbar/>
 <Hero/>
 </Link></section>
<section></section>
</>
  )
}

export default Mainpage