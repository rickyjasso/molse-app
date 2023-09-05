import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const flexBetween = "flex justify-between items-center";    

  return (
    <section id="home" className="gap-16 bg-molse-white py-10 md:h-full md:pb-0">Home
    
    {/* IMAGE AND MAIN HEADER */}
    <div>
      {/* MAIN HEADER */}
      <div>MOLSE ABOGADOS</div>
    </div>
    
    </section>
  )
}

export default Home