import React from "react";

// Secciones para el Home
import {
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ContactForm from "./Home/ContactForm";
import Home from "./Home/home";
import Proyectos from "./Home/proyectos";
import SobreMi from "./Home/sobreMi";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const arrCon = ["Home","SobreMi", "Proyectos","ContactForm"];

function Image(id) {

  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const componentMappings = {
    "Home": Home,
    "SobreMi":SobreMi,
    "Proyectos": Proyectos,
    "ContactForm":ContactForm
  };



  const ComponentToRender = componentMappings[arrCon[JSON.stringify(id.id)]];
  return (
    <ParallaxProvider>
      <section className="section-home">
        <div ref={ref}>{ComponentToRender && <ComponentToRender/>}</div>
      </section>
    </ParallaxProvider>
  );
}

export default function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {arrCon.map((image,index) => (
        <Image id={index} key={image}/>
      ))}
      
    </>
  );
}
