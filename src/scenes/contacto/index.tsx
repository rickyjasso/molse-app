import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import useMediaQuery from "@/hooks/useMediaQuery";
import {useTranslation} from 'react-i18next'
  

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contacto = ({setSelectedPage}: Props) => {
  const { t } = useTranslation();
  const isAboveMediumSize = useMediaQuery("(min-width: 1060px)")
  const inputStyles = `mt-5 w-full rounded-lg bg-white border-solid border border-molse-primary px-5 py-3 placeholder-molse-primary text-black`


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
    <div id="contact" className="bg-bgcontacto">
      <section id="contacto" className={isAboveMediumSize ? `mx-auto justify-center pt-12 pb-16 flex` : `mx-auto w-5/6 pt-12 pb-16 flex-col`}>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contacto)}>
        {/* HEADER */}
          <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{hidden: {opacity: 0, x:-50},
                               visible: {opacity: 1, x:0},
                    }}>
        <HText textSize="text-5xl text-center">
          <div className="flex flex-col">
            <span className="text-molse-white">{t('haveAQuestion')}</span>
            <span className = "text-contactus">{t('contactUs')}</span>
          </div>
        </HText>
          <p className="my-5 text-molse-white text-xl text-center">{t('getInTouch')}</p>
        </motion.div>
        {/* FORM AND IMG */}
        <div className="mt-10 justify-center gap-8 md">
          <motion.div className="mt-10 basis-3/5 md:mt-0"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: true, amount: 0.5}}
                      transition={{duration: 0.5}}
                      variants={{hidden: {opacity: 0, y:50},
                                  visible: {opacity: 1, y:0},
                      }}>
            <form name="contact" onSubmit={onSubmit} method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
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
      </section>
    </div>
  )
}

export default Contacto