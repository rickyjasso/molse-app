import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import {useTranslation} from 'react-i18next'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {
  const { t } = useTranslation();

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  return (
    <section id="inicio">
    <section id="home" className={`bg-blend-overlay bg-[#4B4F58]/90 bg-home bg-cover ${isAboveMediumScreens ? "bg-center" : ""} h-screen pt-12 pb-16 flex justify-center items-center align-middle`} >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)} className="w-5/6">
        <div className="text-white text-center">
          <p className={`flex flex-col ${isAboveMediumScreens ? "text-5xl text-center" : "text-xl text-center"} mb-6 mt-5`}>
            {/* {t('seekingToProvide')}
            <span className={`${isAboveMediumScreens ? "text-6xl text-bold" : "text-3xl text-center"}`}>{t('servicesWithIntegrity')}</span>
            {t('toAllOurClients')}
          </p> */}
            <span className=""> <HText textSize="text-7xl font-bold my-2">{t('servicesWithIntegrity')}</HText></span> 
            <span className="md:text-xl text-lg">{t('toAllOurClients')}</span></p>
          <div className="flex justify-evenly align-middle px-10">
            <ActionButton setSelectedPage={setSelectedPage}>{t('ourServicesButton')}</ActionButton>                                     
            {/* <ActionButton setSelectedPage={setSelectedPage}>Noticias</ActionButton>    */}                                    
          </div>
        </div>

      </motion.div>
    
    </section>
    </section>
  )
}

export default Home