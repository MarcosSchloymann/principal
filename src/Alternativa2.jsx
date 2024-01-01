import React from 'react';
import NavBar2 from './src2/componentes/NavBar2';
// import './src2/css_js/style.css';  
import Section1 from './src2/componentes/Section1';
import Section2 from './src2/componentes/Section2';
import Section3 from './src2/componentes/Section3';
import Section4 from './src2/componentes/Section4';
import Section5 from './src2/componentes/Section5';
import Section6 from './src2/componentes/Section6';
import Section7 from './src2/componentes/Section7';
import Footer from './src2/componentes/Footer';
import useScrollPosition from './hooks/useScroll';

const Alternativa2 = () => {

  const scrollPosition = useScrollPosition()

  return (
    <div>
        <NavBar2/>
        <Section1/>
        <Section2
        scrollPosition={scrollPosition}
        />
        <Section3
        scrollPosition={scrollPosition}
        />
        <Section4/>
        <Section5
        scrollPosition={scrollPosition}
        />
        <Section6
        scrollPosition={scrollPosition}
        />
        <Section7
        scrollPosition={scrollPosition}
        />
        <Footer/>
    </div>
  )
}

export default Alternativa2
