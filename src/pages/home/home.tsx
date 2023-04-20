import React from "react";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "../../components/about";
import { Services } from "../../components/service";;
import Connect from "../../components/connect";
import Footer from "../../components/footer";
import { HeroSection } from "../../components/heroSection";
import { FloatingWhatsApp } from 'react-floating-whatsapp'


interface HooterProps {}

export const Home: React.FC<HooterProps> = () => {
 


  return (
   <>
      <Navbar />
      <HeroSection />
       <div id="about" />
      <AboutUs />
      <div id="services" />
      <Services />
      <div id="contact" />
      <Connect />
      <Footer />
      <FloatingWhatsApp
          phoneNumber="7976393993"
          accountName="Nikita"
          allowEsc
          allowClickAway
          notification
          notificationSound
          avatar="https://www.linkpicture.com/q/avatar.png"
          statusMessage="Online"
        />
    </>
  );
};
