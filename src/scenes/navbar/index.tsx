import { useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo-transparent.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import {GlobeAltIcon} from "@heroicons/react/24/outline"


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {

  const [language, setLanguage] = useState('ES');

  const handleOnClick = () => {
    if (language === 'ES'){
      setLanguage("EN")
    } else {
      setLanguage("ES")
    }

    /* TRANSLATE PAGE */
  };

  const flexBetween = "flex justify-between items-center";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "text-white" : "bg-navbar-scroll drop-shadow transition duration-500"; //TODO: Change BG TO MOLSE COLOR

  return(
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LEFT SIDE */}
          <img alt="logo"className="h-12" src={Logo} />

          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
          <div className={`${flexBetween} w-full gap-16`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link selectedColor={isTopOfPage ? "text-molse-secondary": "text-molse-primary"} page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link selectedColor={isTopOfPage ? "text-molse-secondary": "text-molse-primary"} page="Servicios" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link selectedColor={isTopOfPage ? "text-molse-secondary": "text-molse-primary"} page="Nosotros" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> {/* AQUI VA A IR AREA DE PRESENCIA */}
              <Link selectedColor={isTopOfPage ? "text-molse-secondary": "text-molse-primary"} page="Contacto" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
            <div className={`${flexBetween} gap-8`}>
              <div className="flex items-center justify-center">
              <Link selectedColor={isTopOfPage ? "text-molse-secondary": "text-molse-primary"} page="Noticias" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <button value={language} onClick={handleOnClick} className={`mx-5 ${isTopOfPage? "text-white":"text-molse-primary transition duration-500"}`}>
                  {language}
                  <GlobeAltIcon className={`float-left mr-2 h-6 w-6 ${isTopOfPage? "text-white":"text-molse-primary transition duration-500"}`}/>
                </button>
              </div>
            </div>

          </div>
          ) : (
            <button className="rounded-full bg-molse-primary p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Bars3Icon className="h-6 w-6 text-molse-white"/>
            </button>
          )}
        </div>
      </div>
      </div>

      {/* MOBILE MENU MODEAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-molse-white drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-molse-primary"/>
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <Link selectedColor="text-molse-primary" page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link selectedColor="text-molse-primary" page="Nosotros" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> {/* AQUI VA A IR AREA DE PRESENCIA */}
              <Link selectedColor="text-molse-primary" page="Servicios" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link selectedColor="text-molse-primary" page="Contacto" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <div className="my-10">
              <Link selectedColor="text-molse-primary" page="Noticias" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar