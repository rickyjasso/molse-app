import useMediaQuery from "@/hooks/useMediaQuery";
import Card from "@/shared/Card"
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import services from "@/shared/MolseServices.json"
import HText from "@/shared/HText";
import {useTranslation} from 'react-i18next'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Servicios = ({setSelectedPage}: Props) => {
  const {t} = useTranslation();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const servicesElements = (
    <div className="flex md:flex-wrap md:flex-row flex-col">
      <div className={`align-middle justify-center text-center ${isAboveMediumScreens ? "w-1/2" : ""}`}>
        <Card title={t('counseling')} body={t('counselingDescription')} id={t('1')} icon={services.services[0].icon}></Card>
      </div>
      <div className={`align-middle justify-center text-center ${isAboveMediumScreens ? "w-1/2" : ""}`}>
        <Card title={t('litigation')} body={t('litigationDescription')} id={t('2')} icon={services.services[1].icon}></Card>
      </div>
      <div className={`align-middle justify-center text-center ${isAboveMediumScreens ? "w-1/2" : ""}`}>
        <Card title={t('laborComplianceAndDueDiligence')} body={t('laborComplianceAndDueDiligenceDescription')} id={t('3')} icon={services.services[2].icon}></Card>
      </div>
      <div className={`align-middle justify-center text-center ${isAboveMediumScreens ? "w-1/2" : ""}`}>
        <Card title={t('workrights')} body={t('workrightsdesc')} id={t('4')} icon={services.services[3].icon}></Card>
      </div>
    </div>
    )

  return (
    <div id="services" className="bg-navbar-scroll pt-12 pb-16">
      {/* <section id="services"></section> */}
    <section id="servicios" className="mx-auto w-5/6">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Servicios)}>
        <div className="flex-row justify-center align-middle md:text-start text-center md:mb-20">
          <HText textSize="text-3xl"> <span className="text-molse-primary font-bold"> {t('ourServices')} </span></HText>
        </div>
        <div className="flex md:my-3 md:flex-wrap flex-col my-6">
          {servicesElements}
        </div>
      </motion.div>
    </section>
    </div>
  )
}

export default Servicios