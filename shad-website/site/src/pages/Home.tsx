// filepath: c:\Users\philip\Shad Software\shadsoftware\shad-website\site\src\pages\Home.tsx
import React from "react";
import BackgroundLayout from "../BackgroundLayout";
import Hero from "../Hero";
import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Technologies from "../Technologies";

const Home: React.FC = () => {
  return (
    <BackgroundLayout>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Technologies />
    </BackgroundLayout>
  );
};

export default Home;
