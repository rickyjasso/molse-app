import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import { useTranslation } from 'react-i18next'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  return (
    <section id="inicio">
      <section id="home" className={`bg-blend-overlay bg-[#4B4F58]/90 bg-home bg-cover bg-bottom ${isAboveMediumScreens ? "bg-center" : ""} h-screen pt-12 pb-16 flex justify-center items-center`} >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)} className="w-full mx-auto text-center">
          <div className="text-white">
            <div className="mb-16 md:mt-20 text-center">
              <HText textSize="md:text-9xl font-thin my-2 tracking-widest mb-4 text-8xl">{t('molse')}</HText>
              <HText textSize="md:text-5xl font-thin my-2 tracking-abogadoswide text-4xl">{t('abogados')}</HText>
            </div>

            {/* DESKTOP */}
            <div className="md:block hidden w-full md:text-2xl text-lg tracking-wider bg-molse-primary/50">
              <div className="flex justify-center items-center">
                <div className="text-start [word-spacing:3px]">
                  <p>{t('toAllOurClientsMD')}</p>
                  <p>{t('toAllOurClientsMD2')}</p>
                </div>
              </div>
            </div>

            {/* MOBILE */}
            <div className="md:hidden">
              <div className="w-full text-center md:text-2xl text-lg tracking-wider bg-molse-primary/50">
                <p className="">{t('toAllOurClients')}</p>
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-20">
              <ActionButton setSelectedPage={setSelectedPage}>{t('ourServicesButton')}</ActionButton>                                     
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  )
}

export default Home;