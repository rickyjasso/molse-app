import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: SelectedPage) => void;
    selectedColor: string,
}

function Link({
    page,
    selectedPage,
    setSelectedPage,
    selectedColor,
}: Props) {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? `${selectedColor}` : ""}
    transition duration-500 hover:text-molse-primary
    `} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>
  )
}

export default Link