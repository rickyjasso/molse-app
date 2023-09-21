import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  return (
    <section id="home" className={`bg-blend-overlay bg-black/40 bg-home bg-cover ${isAboveMediumScreens ? "bg-center" : ""} h-screen pt-12 pb-16 flex justify-center items-center align-middle`} >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)} className="w-5/6">
        <div className="text-molse-white text-center">
          <p className={`flex flex-col ${isAboveMediumScreens ? "text-5xl text-center" : "text-2xl text-center"} mb-6 mt-5`}>
            <span className="my-2">BUSCANDO BRINDAR</span> 
            <span className="my-2"> <HText textSize={isAboveMediumScreens?"text-7xl": "text-3xl"}>SERVICIOS CON INTEGRIDAD</HText></span> 
            <span className="my-2">A TODOS NUESTROS CLIENTES</span></p>
          <div className="flex justify-evenly align-middle px-10">
            <ActionButton setSelectedPage={setSelectedPage}>Nuestros servicios</ActionButton>                                     
            {/* <ActionButton setSelectedPage={setSelectedPage}>Noticias</ActionButton>    */}                                    
          </div>
        </div>

      </motion.div>
    
    </section>
  )
}

export default Home