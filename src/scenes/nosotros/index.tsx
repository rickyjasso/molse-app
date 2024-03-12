
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useState } from "react";
import {useTranslation} from 'react-i18next'
import HText from "@/shared/HText";
import NosotrosBG from "/assets/nosotros-bg.png"

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
    <section id="aboutus">
    <section id="nosotros" className="mx-auto sm:w-5/6 pt-24 pb-32 text-molse-primary">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Nosotros)} className="md:flex relative z-10">
        <div>
        </div>
        <div className="md:absolute z-20">
          <div className="flex-row justify-center align-middle text-start mb-10 -mt-10">
            <HText textSize="text-3xl"> <span className="text-molse-primary font-bold md:block hidden">Molse Abogados </span></HText>
          </div>
          <div>
            <div className="text-xl">
              <button onClick={setFalse} className={`w-2/5 md:w-1/5 py-3 ${isActive ? ' bg-molse-primary text-white' : 'border-t-2 border-molse-primary bg-white'}`}>{t('trajectory')}</button>
              <button onClick={setTrue} className={`w-2/5 md:w-1/5 py-3 ${isActive ? 'border-t-2 border-molse-primary bg-white ' : ' bg-molse-primary text-white'}`}>{t('vision')}</button>
            </div>
          </div>
          <div>
            <div className="bg-white md:w-3/5 drop-shadow-xl py-5 px-10 text-xl font-medium tracking-wider md:text-justify">
            <div className={isActive ? 'hidden' : 'block my-5'}>
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
                  <ul className="list-disc list-inside">
                      <li className="my-2">{t('loyalty')}</li>
                      <li className="my-2">{t('responsibility')}</li>
                      <li className="my-2">{t('discipline')}</li>
                      <li className="my-2">{t('tenacity')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-end md:w-full justify-center">
          <img className="md:w-2/3" src={NosotrosBG} alt="" />
        </div>
      </motion.div>
    </section>
    </section>
  )
}

export default Nosotros
