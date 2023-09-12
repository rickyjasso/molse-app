import useMediaQuery from "@/hooks/useMediaQuery";
import Card from "@/shared/card"
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import services from "@/shared/MolseServices.json"
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Servicios = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const servicesElements = services.services.map(service => (
    <div key={service.id}>
      <Card title={service.title} body={service.body}></Card>
    </div>
  ))

  return (
    <div className="bg-molse-white  pt-12 pb-16">
    <section id="servicios" className="mx-auto w-5/6">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Servicios)}>
        <div className="flex-row justify-center align-middle text-center">
        <HText> <span className="text-molse-primary"> Nuestros Servicios </span></HText>
        <p className="text-black">Estos son nuestros servicios</p>
        </div>
        <div className={isAboveMediumScreens ? "flex my-3" : "flex-row my-6"}>
          {servicesElements}
        </div>
      </motion.div>
    </section>
    </div>
  )
}

export default Servicios