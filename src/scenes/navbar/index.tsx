import { useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo-transparent.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import {GlobeAltIcon} from "@heroicons/react/24/outline"
import {useTranslation} from 'react-i18next'


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const {t, i18n} = useTranslation();
  const [language, setLanguage] = useState('ES');



  const handleOnClick = () => {
    if (language === 'ES'){
      setLanguage("EN")
      i18n.changeLanguage('en')
    } else {
      setLanguage("ES")
      i18n.changeLanguage('es')
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
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full gap-16`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link hoverColor={isTopOfPage ? "hover:text-white": "hover:text-molse-primary"} selectedColor={isTopOfPage ? "text-white": "text-molse-primary"} unselectedColor = {isTopOfPage ? "text-white": "text-gray-40"} page={t('home')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link hoverColor={isTopOfPage ? "hover:text-white": "hover:text-molse-primary"} selectedColor={isTopOfPage ? "text-white": "text-molse-primary"} unselectedColor = {isTopOfPage ? "text-white": "text-gray-40"} page={t('services')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link hoverColor={isTopOfPage ? "hover:text-white": "hover:text-molse-primary"} selectedColor={isTopOfPage ? "text-white": "text-molse-primary"} unselectedColor = {isTopOfPage ? "text-white": "text-gray-40"} page={t('aboutUs')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> {/* AQUI VA A IR AREA DE PRESENCIA */}
              <Link hoverColor={isTopOfPage ? "hover:text-white": "hover:text-molse-primary"} selectedColor={isTopOfPage ? "text-white": "text-molse-primary"} unselectedColor = {isTopOfPage ? "text-white": "text-gray-40"} page={t('contact')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>

            {/* RIGHT SIDE */}
            <div className={`${flexBetween} gap-8`}>
              <div className="flex items-center justify-center">
                <button value={language} onClick={handleOnClick} className={`mx-5 ${isTopOfPage? "text-white":"text-molse-primary transition duration-500"}`}>
                  {language}
                  <GlobeAltIcon className={`float-left mr-2 h-6 w-6 ${isTopOfPage? "text-white":"text-molse-primary transition duration-500"}`}/>
                </button>
              </div>
            </div>

          </div>
          ) : (
            <button className="rounded-full  p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Bars3Icon className="h-6 w-6 text-molse-primary"/>
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
              <Link hoverColor={"hover:text-molse-primary"} selectedColor="text-molse-primary" unselectedColor={"text-gray-40"} page={t('home')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link hoverColor={"hover:text-molse-primary"} selectedColor="text-molse-primary" unselectedColor={"text-gray-40"} page={t('services')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> {/* AQUI VA A IR AREA DE PRESENCIA */}
              <Link hoverColor={"hover:text-molse-primary"} selectedColor="text-molse-primary" unselectedColor={"text-gray-40"} page={t('aboutUs')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link hoverColor={"hover:text-molse-primary"} selectedColor="text-molse-primary" unselectedColor={"text-gray-40"} page={t('contact')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <div className="my-10">
              <Link hoverColor={"hover:text-molse-primary"} selectedColor="text-molse-primary" unselectedColor={"text-gray-40"} page="Noticias" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar