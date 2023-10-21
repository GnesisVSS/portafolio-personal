import React, { useEffect, useState } from "react";

import { homeAnimation } from "../animation";
import Navbar from "./Elementos/navbar";
import { useInView } from "react-intersection-observer";

// Secciones para el Home
import Home from "./Home/home";
import Proyectos from "./Home/proyectos";
import SobreMi from "./Home/sobreMi";
import Footer from "./Elementos/footer";
import ContactForm from "./Home/ContactForm";
import Hr from "./Home/Hr";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { Diversity2Outlined } from "@mui/icons-material";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <Navbar />
        <Home />
      </div>
    </section>
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
      <Image />

      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
