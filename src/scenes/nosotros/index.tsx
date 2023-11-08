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
                <h1 className="basis-3/5 font-montserrat text-2xl font-bold mt-5 mb-1 text-molse-tertiary">Trayectoria</h1>
                <p>MOLSE ABOGADOS, se constituye y da inicio a sus operaciones en el año 2008 con el fin de dar asesorar a clientes en las ramas del derecho mercantil, civil y familiar; posteriormente en el año 2020 se consolida y da apertura a un nuevo servicio profesional en la rama del Derecho Laboral.
</p>
                <h1 className="basis-3/5 font-montserrat text-2xl font-bold mt-5 mb-1 text-molse-tertiary">Visión</h1>
                <p>Ser una de las firmas legales líderes en el Norte de México, brindando servicios íntegros, transparencia y de calidad a nuestros clientes.</p>              
            </div>
            <div>
            <h1 className="basis-3/5 font-montserrat text-2xl font-bold mt-5 mb-1 text-molse-tertiary">Valores</h1>
            <p>Lealtad, Responsabilidad, Disciplina, Tenacidad.</p>

            </div>
          </div>
        </div>: 
        (<div>
          <div className="mb-10"><HText textSize="3xl"><span className="text-molse-primary">Nosotros</span></HText></div>
          <h1 className="basis-3/5 font-montserrat text-2xl font-bold mt-5 mb-1 text-molse-tertiary">Trayectoria</h1>
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