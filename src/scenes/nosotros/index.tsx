
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {useTranslation} from 'react-i18next'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Nosotros = ({setSelectedPage}: Props) => {

  const {t} = useTranslation();

  const [isActive, setIsActive] = useState(false);

  const setFalse = () => {
      setIsActive(false);
    }
    const setTrue = () => {
      setIsActive(true);
    }

  return (
    <section id="nosotros" className="mx-auto sm:w-5/6 pt-24 pb-32 text-black">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Nosotros)} className="md:flex relative z-10">
        <div className="md:absolute z-20">
          <div>
            <div>
              <button onClick={setFalse} className={`w-2/5 md:w-1/5 py-3 ${isActive ? ' bg-slate-100' : 'border-t-2 border-molse-primary bg-white '}`}>Trayectoria</button>
              <button onClick={setTrue} className={`w-2/5 md:w-1/5 py-3 ${isActive ? 'border-t-2 border-molse-primary bg-white ' : ' bg-slate-100'}`}>Nosotros</button>
            </div>
          </div>
          <div>
            <div className="bg-white md:w-3/5 drop-shadow-xl py-5 px-10 text-lg">
            <div className={isActive ? 'hidden' : 'block my-5'}>
                <h1 className="mb-3 text-3xl text-molse-primary font-bold">{t('trajectory')}</h1>
                <p>{t('trajectoryDescription')}</p>
                <img src="" alt="" />
              </div>
              <div className={isActive ? 'block my-5' : 'hidden'}>
                <div className="my-5">
                  <h1 className="mb-3 text-3xl text-molse-primary font-bold">{t('vision')}</h1>
                  <p>{t('visionDescription')}</p>
                </div>
                <div className="my-5">
                  <h1 className="mb-3 text-3xl text-molse-primary font-bold">{t('values')}</h1>
                  <ul>
                      <li className="flex my-5"><span><FontAwesomeIcon className="mr-2 text-molse-primary" icon={faCheck}/></span>{t('loyalty')}</li>
                      <li className="flex my-5"><span><FontAwesomeIcon className="mr-2 text-molse-primary" icon={faCheck}/></span>{t('responsibility')}</li>
                      <li className="flex my-5"><span><FontAwesomeIcon className="mr-2 text-molse-primary" icon={faCheck}/></span>{t('discipline')}</li>
                      <li className="flex my-5"><span><FontAwesomeIcon className="mr-2 text-molse-primary" icon={faCheck}/></span>{t('tenacity')}</li>
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
