import { SelectedPage } from "@/shared/types";
import Map from "@/shared/Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import {useTranslation} from 'react-i18next'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};



const AreaPresencia = ({setSelectedPage}: Props) => {
    const { t } = useTranslation();
    const isAboveMediumSize = useMediaQuery("(min-width: 1060px)")
    const isAboveSmSize = useMediaQuery("(min-width: 680px)")
    const listStyles = `flex ${isAboveMediumSize ? `justify-center w-full` : `justify-center w-1/3` } ${isAboveSmSize ? ``:`justify-start w-full`} text-xl text-bold my-5 align-middle`
    const ciudadesPresencia = [
    'Monterrey',
    'Tijuana',
    'Acapulco',
    'Aguascalientes',
    'Saltillo',
    'Queretaro',
    'Hermosillo',
    'Cd de México',
    'Guadalajara',
    ]

  return (
<div id="presencia" className="bg-white pt-12 pb-16">
    <section id="presence" className="w-5/6 mx-auto">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contacto)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        }}
    >
        <h1 className="text-3xl mb-8 font-bold md:text-start text-center text-molse-primary">{t('presenceArea')}</h1>
        <p className="mt-3 md:text-2xl text-lg md:text-start text-center text-molse-secondary">{t('presenceAreaText')}</p>
        <div className="mt-10 flex items-center">
            <div>
            <div className="bg-molse-primary w-full md:w-4/5 lg:w-3/4 xl:w-2/3 -mx-3 p-5">
                <div className="mx-5 my-5 md:block hidden">
                    <h2 className="underline py-5 text-xl">{t('oficinasSede')}:</h2>
                    <div className="text-white mb-8 text-xl">
                        <span className="mr-2 mt-1">
                        <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        {ciudadesPresencia[0]}
                    </div>
                    <h2 className="underline mt-3 mb-3 text-xl">{t('corresponsalias')}:</h2>
                    <ul className="text-white flex flex-wrap-reverse justify-center items-center text-xl align-middle pb-10">
                        {ciudadesPresencia.slice(1).map((city, index) => (
                        <li className={`w-1/3 my-6 text-center`} key={index}>
                            <span className="mr-2 mt-1">
                            <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            {city}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>

                <ul className="text-black md:gap-4 md:text-center flex flex-wrap md:flex-col md:hidden">
                    {ciudadesPresencia.map((city, index) => (
                        <li className={`mb-2 ${listStyles}`} key={index}>
                            <span className="text-molse-primary mr-2 mt-1">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            {city}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-shrink-0 w-full items-end md:w-[34rem] md:block hidden">
                <Map />
            </div>
        </div>
    </motion.div>
    </section>

</div>

  )
}

export default AreaPresencia