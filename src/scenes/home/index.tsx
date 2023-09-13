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
    <section id="home" className="h-screen pt-12 pb-16 bg-molse-primary flex justify-center items-center align-middle">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)} className={`${isAboveMediumScreens ? "w-1/2" : "w-5/6"}`}>
        <div className="text-white text-center">
            <HText>Molse Abogados, S.C.</HText>
          <p className={`${isAboveMediumScreens ? "text-lg" : "text-sm text-center"} mb-6 mt-5`}>is a law firm that has been duly incorporated under
                                        Mexican Legislation to counsel and advise companies in corporate, labor and
                                        employment laws and regulations.</p>
          <ActionButton setSelectedPage={setSelectedPage}>Servicios</ActionButton>
          <p className="text-3xl mt-12 ">EL FONDO TENDRÁ UNA IMAGEN</p>                                        
        </div>

      </motion.div>
    
    </section>
  )
}

export default Home