import { useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex justify-between items-center";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-navbar-scroll drop-shadow"; //TODO: Change BG TO MOLSE COLOR

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
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Nosotros" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> {/* AQUI VA A IR AREA DE PRESENCIA */}
              <Link page="Servicios" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Noticias" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Contacto" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
{/*             <div className={`${flexBetween} gap-8`}>
              <ActionButton setSelectedPage={setSelectedPage}>Iniciar Sesión</ActionButton>
            </div> */}
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
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Nosotros" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> {/* AQUI VA A IR AREA DE PRESENCIA */}
              <Link page="Servicios" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Noticias" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Contacto" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar