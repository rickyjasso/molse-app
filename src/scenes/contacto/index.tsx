import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import Map from "@/shared/Map";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'react-i18next'
  

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contacto = ({setSelectedPage}: Props) => {
  const { t } = useTranslation();
  const isAboveMediumSize = useMediaQuery("(min-width: 1060px)")
  const isAboveMapSize = useMediaQuery("(min-width: 1300px)")
  const isAboveSmSize = useMediaQuery("(min-width: 680px)")
  const inputStyles = `mt-5 w-full rounded-lg bg-white border-solid border border-molse-primary px-5 py-3 placeholder-molse-primary text-black`
  const listStyles = `flex ${isAboveMediumSize ? `justify-center w-full` : `justify-center w-1/3` } ${isAboveSmSize ? ``:`justify-start w-full`} text-xl text-bold my-5 align-middle`
  const ciudadesPresencia = [
    'Monterrey',
    'Tijuana',
    'Saltillo',
    'Torreon',
    'Guadalajara',
    'Aguascalientes',
    'Queretaro',
    'Ciudad de México',
    'Acapulco',
  ]

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }
  
  return (
    <div className="bg-molse-primary">
      <section id="contacto" className={isAboveMediumSize ? `mx-auto w-5/6 pt-12 pb-16 flex` : `mx-auto w-5/6 pt-12 pb-16 flex-col`}>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contacto)}>
        {/* HEADER */}
          <motion.div className="md:w-4/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{hidden: {opacity: 0, x:-50},
                               visible: {opacity: 1, x:0},
                    }}>
        <HText textSize="text-5xl text-center md:text-start">
          <div className="flex flex-col">
            <span className="text-molse-white">{t('haveAQuestion')}</span>
            <span>
              {t('contactUs')}
            </span>
          </div>
        </HText>
          <p className="my-5 text-molse-white text-xl text-center md:text-start">{t('getInTouch')}</p>
        </motion.div>
        {/* FORM AND IMG */}
        <div className="mt-10 justify-between gap-8 md:auto">
          <motion.div className="mt-10 basis-3/5 md:mt-0"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: true, amount: 0.5}}
                      transition={{duration: 0.5}}
                      variants={{hidden: {opacity: 0, y:50},
                                  visible: {opacity: 1, y:0},
                      }}>
            <form name="contact" onSubmit={onSubmit} method="POST" data-netlify="true">
                  <input type="hidden" name="contact" value="contact" />
                  <input className={inputStyles} type="text" placeholder={t('name')}
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}/>
                  {errors.name && (
                    <p className="mt-1 text-red">
                      {errors.name.type === "required" && "* Este campo es obligatorio."}
                      {errors.name.type === "maxLength" && "* La longitud maxima es de 100 caracteres."}
                    </p>
                  )}

                  <input className={inputStyles} type="text" placeholder={t('email')} 
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}/>
                  {errors.email && (
                    <p className="mt-1 text-red">
                      {errors.email.type === "required" && "* Este campo es obligatorio."}
                      {errors.email.type === "pattern" && "* El correo no es valido."}
                    </p>
                  )}

                  <textarea className={inputStyles} placeholder={t('message')} rows={4} cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}/>
                  {errors.name && (
                  <p className="mt-1 text-red">
                    {errors.name.type === "required" && "* Este campo es obligatorio."}
                    {errors.name.type === "maxLength" && "* La longitud maxima es de 2000 caracteres."}
                  </p>
                  )}

                  <button type="submit" className={`justify-center mt-5 rounded-lg bg-white px-20 py-3 transition duration-500 hover:text-molse-tertiary hover:bg-molse-secondary text-molse-primary ${isAboveMediumSize ? ``: `w-full`}`}>
                    {t('send')}
                  </button>

            </form>
          </motion.div>
        </div>

        </motion.div>
        <motion.div className="flex-col flex md:w-4/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{hidden: {opacity: 0, x:50},
                       visible: {opacity: 1, x:0},
            }}>
        <h1 className={`text-5xl font-bold flex justify-center align-middle text-molse-white ${isAboveMediumSize ?  null : `mt-10`}` }>{t('presenceArea')}</h1>
        {isAboveMapSize ? (
          <div className="mt-10 justify-between gap-8 md:auto">
            <motion.div className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{hidden: {opacity: 0, y:50},
                                    visible: {opacity: 1, y:0},
                        }}>
            <Map/>
            </motion.div>
          </div>
          ): <div className="w-full flex mx-0">
              <ul className='text-white mt-5 justify-start flex flex-wrap'>
              {ciudadesPresencia.map((city, index) => (
                <li className={listStyles} key={index}>
                  <span><FontAwesomeIcon icon={faLocationDot} className="text-molse-white mr-2 mt-1" /></span>
                  {city}
                  </li>
              ))}
              </ul>
            </div>}

          
        </motion.div>
      </section>
    </div>
  )
}

export default Contacto