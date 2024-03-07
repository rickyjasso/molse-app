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
      <section id="home" className={`bg-blend-overlay bg-[#4B4F58]/90 bg-home bg-cover ${isAboveMediumScreens ? "bg-center" : ""} h-screen pt-12 pb-16 flex justify-center items-center`} >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)} className="w-full max-w-5xl mx-auto text-center">
          <div className="text-white">
            <HText textSize="text-7xl font-bold my-2">{t('servicesWithIntegrity')}</HText>
            <p className="md:text-xl text-lg">{t('toAllOurClients')}</p>
            <div className="flex justify-center space-x-4 pt-4">
              <ActionButton setSelectedPage={setSelectedPage}>{t('ourServicesButton')}</ActionButton>                                     
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  )
}

export default Home;