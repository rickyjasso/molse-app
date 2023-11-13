
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Nosotros = ({setSelectedPage}: Props) => {

  const [isActive, setIsActive] = useState(false);

  const setFalse = () => {
      setIsActive(false);
    }
    const setTrue = () => {
      setIsActive(true);
    }

  return (
    <section id="nosotros" className="mx-auto sm:w-5/6 pt-12 pb-32 text-black">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Nosotros)} className="md:flex relative z-10">
        <div className="md:absolute z-20">
          <div>
            <div>
              <button onClick={setFalse} className={isActive ? 'w-2/5 md:w-1/5 py-2 bg-slate-100' : 'border-t-2 border-molse-primary bg-white w-2/5 md:w-1/5 py-2'}>Trayectoria</button>
              <button onClick={setTrue} className={isActive ? 'border-t-2 border-molse-primary bg-white w-2/5 md:w-1/5 py-2' : 'w-2/5 md:w-1/5 py-2 bg-slate-100'}>Nosotros</button>
            </div>
          </div>
          <div>
            <div className="bg-white md:w-3/5 drop-shadow-xl py-5 px-10 text-lg">
            <div className={isActive ? 'hidden' : 'block my-5'}>
                <h1 className="mb-3 text-3xl text-molse-primary font-bold">Trayectoria</h1>
                <p>MOLSE ABOGADOS, se constituye y da inicio a sus operaciones en el año 2008 con el fin de dar asesorar a clientes en las ramas del derecho mercantil, civil y familiar; posteriormente en el año 2020 se consolida y da apertura a un nuevo servicio profesional en la rama del Derecho Laboral.</p>
                <img src="" alt="" />
              </div>
              <div className={isActive ? 'block my-5' : 'hidden'}>
                <div className="my-5">
                  <h1 className="mb-3 text-3xl text-molse-primary font-bold">Nuestra Visión</h1>
                  <p>Ser una de las firmas legales líderes en el Norte de México, brindando servicios íntegros, transparencia y de calidad a nuestros clientes.</p>
                </div>
                <div className="my-5">
                  <h1 className="mb-3 text-3xl text-molse-primary font-bold">Nuestros Valores</h1>
                  <ul>
                      <li className="flex my-5"><span><FontAwesomeIcon className="mr-2 text-molse-primary" icon={faCheck}/></span>Lealtad</li>
                      <li className="flex my-5"><span><FontAwesomeIcon className="mr-2 text-molse-primary" icon={faCheck}/></span>Responsabilidad</li>
                      <li className="flex my-5"><span><FontAwesomeIcon className="mr-2 text-molse-primary" icon={faCheck}/></span>Disciplina</li>
                      <li className="flex my-5"><span><FontAwesomeIcon className="mr-2 text-molse-primary" icon={faCheck}/></span>Tenacidad</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-end md:w-full justify-center">
          <img className="" src="https://brujuladigital.net/images/news/es/b_24516_bolivianos-de-experiencia-y-trayectoria-en-el-sector-empresarial-dan-vida-a-braq-empresa-de-servicios-corporativos-1.jpeg" alt="" />
        </div>
      </motion.div>
    </section>
  )
}

export default Nosotros
