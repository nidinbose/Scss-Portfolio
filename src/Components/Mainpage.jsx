import React from 'react'
import '../Components/Scss/Mainpage.scss';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Pic from './UI/Pic';
import About from './About';
// import Services from './Services';
const Mainpage = () => {
  return (
<>
<section id='Homepage'><Link to={``}>
 <Navbar/>
 <Hero/>
 </Link></section>
<section>
 
</section>
<About/>
<section>
  {/* <Services/> */}
</section>

</>
  )
}

export default Mainpage