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
    'Ciudad de México',
    'Guadalajara',
    'Queretaro',
    'Saltillo',
    'Hermosillo',
    'Tijuana',
    'Aguascalientes',
    'Acapulco',
    ]

  return (
<div id="presencia" className="bg-molse-white pt-12 pb-16">
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
        <h1 className="text-5xl font-bold text-center text-molse-primary">{t('presenceArea')}</h1>
        <p className="mt-3 text-lg text-center text-molse-primary">{t('presenceAreaText')}</p>
        <div className="mt-10 flex flex-col items-center">
            <div className="flex-shrink-0 w-full max-w-2xl md:block hidden">
                <Map />
            </div>
            <ul className="text-black md:gap-4 md:text-center flex flex-wrap md:flex-nowrap">
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
    </motion.div>
    </section>

</div>

  )
}

export default AreaPresencia