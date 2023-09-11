import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home";
import Nosotros from "@/scenes/nosotros";
import Servicios from "@/scenes/servicios";
import Contacto from "@/scenes/contacto";
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg--white">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home></Home>
      <Nosotros></Nosotros>
      <Servicios></Servicios>
      <Contacto setSelectedPage={setSelectedPage}></Contacto>
    </div>
  )
}

export default App
