import { useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "/assets/logomol.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import {GlobeAltIcon} from "@heroicons/react/24/outline"
import {useTranslation} from 'react-i18next'


type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
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
  const navbarBackground = "top-0 bg-navbar-scroll drop-shadow transition duration-500"; //TODO: Change BG TO MOLSE COLOR

  return(
    <nav>
      <div className={`${navbarBackground} ${flexBetween} top-0 z-30 w-full py-6 md:fixed`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LEFT SIDE */}
          <img alt="logo"className="h-12" src={Logo} />
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full gap-16`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link hoverColor={"hover:text-black"} selectedColor={ "text-molse-primary"} unselectedColor = { "text-molse-primary"} page={t('home')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link hoverColor={"hover:text-black"} selectedColor={ "text-molse-primary"} unselectedColor = { "text-molse-primary"} page={t('services')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link hoverColor={"hover:text-black"} selectedColor={ "text-molse-primary"} unselectedColor = { "text-molse-primary"} page={t('aboutUs')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> {/* AQUI VA A IR AREA DE PRESENCIA */}
              <Link hoverColor={"hover:text-black"} selectedColor={ "text-molse-primary"} unselectedColor = { "text-molse-primary"} page={t('presencearea')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link hoverColor={"hover:text-black"} selectedColor={ "text-molse-primary"} unselectedColor = { "text-molse-primary"} page={t('contact')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <a href="https://blog.molseabogados.com" className="hover:text-black text-molse-primary text-lg" target="_blank" rel="noopener noreferrer">{t('news')}</a>

            </div>

            {/* RIGHT SIDE */}
            <div className={`${flexBetween} gap-8`}>
              <div className="flex items-center justify-center">
                <button value={language} onClick={handleOnClick} className={`mx-5 ${"text-molse-primary transition duration-500"}`}>
                  {language}
                  <GlobeAltIcon className={`float-left mr-2 h-6 w-6 ${"text-molse-primary transition duration-500"}`}/>
                </button>
              </div>
            </div>

          </div>
          ) : (
            <div className="flex">
              <button className="rounded-full  p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className={`h-6 w-6 ${"text-molse-primary transition duration-500"}`}/>
              </button>
            </div>
          )}
        </div>
      </div>
      </div>

      {/* MOBILE MENU MODEAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-navbar-scroll">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-molse-primary"/>
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl h-96">
              <Link hoverColor={"hover:text-black"} selectedColor="text-black" unselectedColor={"text-molse-primary"} page={t('home')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link hoverColor={"hover:text-black"} selectedColor="text-black" unselectedColor={"text-molse-primary"} page={t('services')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> {/* AQUI VA A IR AREA DE PRESENCIA */}
              <Link hoverColor={"hover:text-black"} selectedColor="text-black" unselectedColor={"text-molse-primary"} page={t('aboutUs')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link hoverColor={"hover:text-black"} selectedColor="text-black" unselectedColor = { "text-molse-primary"} page={t('presencearea')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link hoverColor={"hover:text-black"} selectedColor="text-black" unselectedColor={"text-molse-primary"} page={t('contact')} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <a href="https://blog.molseabogados.com" className="hover:text-black text-molse-primary text-lg" target="_blank" rel="noopener noreferrer">{t('news')}</a>
              <div className="flex mt-auto">
                <button value={language} onClick={handleOnClick} className={`flex items-end align-bottom ${"text-molse-primary transition duration-500"}`}>
                    <GlobeAltIcon className={`float-left mr-1 h-6 w-6 ${"text-molse-primary transition duration-500"}`}/>
                    <span className="text-lg">{language}</span>
                </button>
              </div>
              </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar