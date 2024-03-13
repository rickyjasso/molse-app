import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import useMediaQuery from "@/hooks/useMediaQuery";
import {useTranslation} from 'react-i18next';

import Phone from '/icons/phone.png';
import Mail from '/icons/mail.png';
import Pin from '/icons/pin.png';
  

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contacto = ({setSelectedPage}: Props) => {
  const { t } = useTranslation();
  const isAboveMediumSize = useMediaQuery("(min-width: 1060px)")
  const inputStyles = `mt-5 w-full  bg-white border-solid border border-molse-primary px-5 py-3 placeholder-molse-primary text-black`


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
    <div id="contact" className="bg-molse-primary">
      <section id="contacto" className={isAboveMediumSize ? `mx-auto pt-12 pb-16 flex w-5/6` : `mx-auto w-5/6 pt-12 pb-16 flex-col`}>
        <motion.div className="w-full" onViewportEnter={() => setSelectedPage(SelectedPage.Contacto)}>
        {/* HEADER */}
          <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{hidden: {opacity: 0, x:-50},
                               visible: {opacity: 1, x:0},
                    }}>
          <div>
            <HText textSize="text-3xl"> <span className="text-white font-bold">{t('contact')}</span></HText>
            <p className="mt-5 text-molse-secondary text-xl">{t('contactoText')}</p>
          </div>
        </motion.div>

        {/* FORM AND IMG */}
        <div className="mt-10 gap-8">
          <motion.div className="mt-10 md:mt-0"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: true, amount: 0.5}}
                      transition={{duration: 0.5}}
                      variants={{hidden: {opacity: 0, y:50},
                                  visible: {opacity: 1, y:0},
                      }}>

            <div className="md:flex md:w-full md:justify-between items-center">
              <div>
                <form className="h-100" name="contact" onSubmit={onSubmit} method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Name and Company */}
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-xl text-white mb-2">
                      {t('cf1')}:
                    </label>
                    <input
                      id="name"
                      className={inputStyles}
                      type="text"
                      {...register("name", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red">
                        {errors.name.type === "required" && "* Este campo es obligatorio."}
                        {errors.name.type === "maxLength" && "* La longitud máxima es de 100 caracteres."}
                      </p>
                    )}
                  </div>

                  {/* Email and Phone */}
              <div className="flex mb-4">
                {/* Email */}
                <div className="w-1/2 pr-2">
                  <label htmlFor="email" className="block text-xl text-molse-white mb-2">
                  {t('cf2')}:
                  </label>
                  <input
                    id="email"
                    className={inputStyles}
                    type="text"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red">
                      {errors.email.type === "required" && "* Este campo es obligatorio."}
                      {errors.email.type === "pattern" && "* El correo no es válido."}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="w-1/2 pl-2">
                  <label htmlFor="phone" className="block text-xl text-molse-white mb-2">
                  {t('cf3')}:
                  </label>
                  <input
                    id="phone"
                    className={inputStyles}
                    type="text"
                    {...register("phone", {
                      required: true,
                      pattern: /^[0-9]{10,}$/, // Allows only digits and enforces a minimum length of 10
                    })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red">
                      {errors.phone.type === "required" && "* Este campo es obligatorio."}
                      {errors.phone.type === "pattern" && "* El número de teléfono no es válido."}
                    </p>
                  )}
                </div>
              </div>


                  {/* Message */}
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-xl text-white mb-2">
                      {t('cf4')}:
                    </label>
                    <textarea
                      id="message"
                      className={inputStyles}
                      rows={4}
                      cols={50}
                      {...register("message", {
                        required: true,
                        maxLength: 2000,
                      })}
                    />
                    {errors.message && (
                      <p className="mt-1 text-red">
                        {errors.message.type === "required" && "* Este campo es obligatorio."}
                        {errors.message.type === "maxLength" && "* La longitud máxima es de 2000 caracteres."}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`justify-center mt-5 rounded-xl text-xl bg-molse-secondary px-10 py-2 transition duration-500 hover:text-molse-primary hover:bg-molse-white text-white ${
                      isAboveMediumSize ? `` : `w-full`
                    }`}
                  >
                    {t('send')}
                  </button>
                </form>
              </div>

              <div className="flex items-center md:mt-0 mt-10">
                <div className="flex flex-col text-white md:text-xl text-lg">
                  <div className="flex items-center mb-8">
                    <div className="md:bg-molse-secondary p-2 rounded-full md:mr-8">
                      <img className="w-8 h-8" src={Phone} alt="Telefono Molse Abogados" />
                    </div>
                    <p className="ml-2">+52 81-8340-2133</p>
                  </div>
                  <div className="flex items-center mb-8">
                    <div className="md:bg-molse-secondary p-2 rounded-full md:mr-8">
                      <img className="w-8 h-8" src={Mail} alt="Correo de contacto Molse Abogados" />
                    </div>
                      <p className="ml-2">contacto@molseabogados.com</p>
                  </div>
                  <div className="flex items-center">
                    <div className="md:bg-molse-secondary p-2 rounded-full md:mr-8">
                      <img className="w-8 h-8" src={Pin} alt="Ubicación Molse Abogados" />
                    </div>
                    <div className="flex flex-col text-sm md:text-xl">
                      <p className="ml-2">Molse Abogados, S.C.</p>
                      <p className="ml-2">Calle 05 de mayo pte, 901-7, Colonia Centro.</p>
                      <p className="ml-2">Monterrey, Nuevo León, México, C.P. 64000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        </motion.div>
      </section>
    </div>
  )
}

export default Contacto