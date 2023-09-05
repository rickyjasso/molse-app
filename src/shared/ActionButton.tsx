import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink className="rounded-md text-molse-primary bg-molse-white px-10 py-2 hover:bg-molse-secondary hover:text-molse-tertiary transition duration-500" 
    onClick={() => setSelectedPage(SelectedPage.Contacto)}
    href={`#${SelectedPage.Contacto}`}> 
    {children} </AnchorLink>
  )
}

export default ActionButton