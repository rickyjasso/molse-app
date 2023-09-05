import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: SelectedPage) => void;
}

function Link({
    page,
    selectedPage,
    setSelectedPage,
}: Props) {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-molse-primary" : ""}
    transition duration-500 hover:text-molse-tertiary
    `} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>
  )
}

export default Link