import React from "react";
import Logo from "./../Components/Header/Logo.jsx";
import SiteName from "../Components/Header/SiteName.jsx";
import Navigation from "../Components/Header/Navigation.jsx";
import RegisterButton from "../Components/Header/RegisterButton.jsx";
import FooterScreen from "../Components/Footer/main/FooterScreen.jsx";

function HeaderScreen() {
  const newLocal = "w-350 h-20 bg-[#d7b6ff] flex items-center rounded-[3vw] shadow-lg ml-45 mt-10 text-[#000] font-semibold flex-row ";
  return (
    <div class={newLocal}>
      <Logo />
      <SiteName />
      <Navigation />
      <RegisterButton />
      <FooterScreen />
    </div>
  );
}
export default HeaderScreen;