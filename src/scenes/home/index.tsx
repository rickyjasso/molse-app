import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {
  return (
    <section id="home" className="mx-auto w-5/6 pt-24 pb-32">Home
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
    {/* IMAGE AND MAIN HEADER */}
    <div>
      {/* MAIN HEADER */}
      <div>MOLSE ABOGADOS</div>
    </div>
    
      </motion.div>
    
    </section>
  )
}

export default Home