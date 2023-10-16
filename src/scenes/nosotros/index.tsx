import useMediaQuery from "@/hooks/useMediaQuery";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Nosotros = ({setSelectedPage}: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="nosotros" className="mx-auto w-5/6 pt-12 pb-16">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Nosotros)}>
        {
        isAboveMediumScreens? <div>
          <div className="mb-10 text-center"><HText textSize="text-3xl"><span className="text-molse-primary">Nosotros</span></HText></div>
          <div className="flex w-50 justify-center align-middle">
            <div className="flex-row">
                <h1 className="basis-3/5 font-montserrat text-2xl font-bold mt-5 mb-1 text-molse-tertiary">Misión</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error distinctio placeat.</p>
                <h1 className="basis-3/5 font-montserrat text-2xl font-bold mt-5 mb-1 text-molse-tertiary">Visión</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci error odio harum provident deserunt inventore odit facilis necessitatibus maxime illum.</p>              
            </div>
            <div>
            <h1 className="basis-3/5 font-montserrat text-2xl font-bold mt-5 mb-1 text-molse-tertiary">Valores</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quidem dolor facere? In, consequatur?</p>

            </div>
          </div>
        </div>: 
        (<div>
          <div className="mb-10"><HText textSize="3xl"><span className="text-molse-primary">Nosotros</span></HText></div>
          <h1 className="basis-3/5 font-montserrat text-2xl font-bold mt-5 mb-1 text-molse-tertiary">Misión</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error distinctio placeat.</p>
          <h1 className="basis-3/5 font-montserrat text-2xl font-bold mt-5 mb-1 text-molse-tertiary">Visión</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci error odio harum provident deserunt inventore odit facilis necessitatibus maxime illum.</p>
          <h1 className="basis-3/5 font-montserrat text-2xl font-bold mt-5 mb-1 text-molse-tertiary">Valores</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quidem dolor facere? In, consequatur?</p>
        </div>)
        }
        
      </motion.div>
    </section>
  )
}

export default Nosotros