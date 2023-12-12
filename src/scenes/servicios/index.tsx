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
    <div className="flex flex-wrap">
      <div className={`align-middle justify-center text-center ${isAboveMediumScreens ? "w-1/3" : ""}`}>
        <Card title={t('consultancy')} body={t('consultancyDescription')} id={t('1')} icon={services.services[0].icon}></Card>
      </div>
      <div className={`align-middle justify-center text-center ${isAboveMediumScreens ? "w-1/3" : ""}`}>
        <Card title={t('laborAdvisory')} body={t('laborAdvisoryDescription')} id={t('2')} icon={services.services[0].icon}></Card>
      </div>
      <div className={`align-middle justify-center text-center ${isAboveMediumScreens ? "w-1/3" : ""}`}>
        <Card title={t('additionalAdvisory')} body={t('additionalAdvisoryDescription')} id={t('3')} icon={services.services[0].icon}></Card>
      </div>
      <div className={`align-middle justify-center text-center ${isAboveMediumScreens ? "w-1/3" : ""}`}>
        <Card title={t('conciliationAppointments')} body={t('conciliationAppointmentsDescription')} id={t('4')} icon={services.services[0].icon}></Card>
      </div>
      <div className={`align-middle justify-center text-center ${isAboveMediumScreens ? "w-1/3" : ""}`}>
        <Card title={t('databaseImplementation')} body={t('databaseImplementationDescription')} id={t('5')} icon={services.services[0].icon}></Card>
      </div>
    </div>
    )

  return (
    <div className="bg-molse-white pt-12 pb-16">
    <section id="servicios" className="mx-auto w-5/6">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Servicios)}>
        <div className="flex-row justify-center align-middle text-center">
          <HText textSize="text-3xl"> <span className="text-molse-primary"> {t('ourServices')} </span></HText>
          <p className="text-black text-xl">{t('theseAreOurServices')}</p>
        </div>
        <div className={isAboveMediumScreens ? "flex my-3 flex-wrap" : "flex flex-col my-6"}>
          {servicesElements}
        </div>
      </motion.div>
    </section>
    </div>
  )
}

export default Servicios