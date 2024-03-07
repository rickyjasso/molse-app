import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
  selectedColor: string;
  hoverColor: string;
  unselectedColor: string;
  offset?: number; // New prop for scroll offset
};

function Link({
  page,
  selectedPage,
  setSelectedPage,
  selectedColor,
  hoverColor,
  unselectedColor,
  offset = 97, // Default offset value (you can adjust it as needed)
}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      offset={offset} // Set the offset value
      className={`${selectedPage === lowerCasePage ? `${selectedColor}` : `${unselectedColor}`}
        transition duration-500 text-lg ${hoverColor}
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;