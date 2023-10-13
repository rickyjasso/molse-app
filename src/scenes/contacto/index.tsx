import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import Map from "@/shared/Map";
import useMediaQuery from "@/hooks/useMediaQuery";
  

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contacto = ({setSelectedPage}: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
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
    <div className="bg-molse-primary">
    <section id="contacto" className="mx-auto w-5/6  pt-12 pb-16 flex">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contacto)}>
        {/* HEADER */}
        <motion.div className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{hidden: {opacity: 0, x:-50},
                               visible: {opacity: 1, x:0},
                    }}>
        <HText>
          <span className="text-molse-white">¿Tienes una pregunta?</span> ¡Contactanos!
        </HText>
          <p className="my-5 text-molse-white">Ponte en contacto y responderemos lo más pronto posible.</p>
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
            <form target="_blank" onSubmit={onSubmit} 
                  method="POST" 
                  /* AQUI VA EL EMAIL DE MOLSE */ 
                  data-netlify="true">
                  
                  <input className={inputStyles} type="text" placeholder="Nombre" 
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}/>
                  {errors.name && (
                    <p className="mt-1 text-molse-primary">
                      {errors.name.type === "required" && "Este campo es obligatorio."}
                      {errors.name.type === "maxLength" && "La longitud maxima es de 100 caracteres."}
                    </p>
                  )}

                  <input className={inputStyles} type="text" placeholder="Correo" 
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}/>
                  {errors.email && (
                    <p className="mt-1 text-molse-primary">
                      {errors.email.type === "required" && "Este campo es obligatorio."}
                      {errors.email.type === "pattern" && "El correo no es valido."}
                    </p>
                  )}

                  <textarea className={inputStyles} placeholder="Mensaje" rows={4} cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}/>
                  {errors.name && (
                  <p className="mt-1 text-molse-primary">
                    {errors.name.type === "required" && "Este campo es obligatorio."}
                    {errors.name.type === "maxLength" && "La longitud maxima es de 2000 caracteres."}
                  </p>
                  )}

                  <button type="submit" className="mt-5 rounded-lg bg-molse-primary px-20 py-3 transition duration-500 hover:text-molse-white text-white">
                    Enviar
                  </button>

            </form>
          </motion.div>
        </div>

      </motion.div>
          {isAboveMediumScreens ? (
            <motion.div className="flex-col flex md:w-4/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{hidden: {opacity: 0, x:50},
                       visible: {opacity: 1, x:0},
            }}>
        <h1 className="font-montserrat text-3xl font-bold text-center text-molse-white">Area de presencia</h1>
          <Map/>
        </motion.div>
          ): <div></div>}

    </section>
    </div>
  )
}

export default Contacto