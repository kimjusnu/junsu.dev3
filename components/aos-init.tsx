"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 100,
      delay: 0,
      mirror: true,
    });
  }, []);

  return null;
}
