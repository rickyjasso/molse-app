import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: SelectedPage) => void;
    selectedColor: string,
    hoverColor: string,
    unselectedColor: string,
}

function Link({
    page,
    selectedPage,
    setSelectedPage,
    selectedColor,
    hoverColor,
    unselectedColor
}: Props) {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? `${selectedColor}` : `${unselectedColor}`}
    transition duration-500 ${hoverColor}
    `} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>
  )
}

export default Link