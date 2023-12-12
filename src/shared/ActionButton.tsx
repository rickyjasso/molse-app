import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink className="rounded-md text-molse-primary font-timesnewroman font-bold bg-white px-10 py-2 hover:bg-molse-primary hover:text-white transition duration-500" 
    onClick={() => setSelectedPage(SelectedPage.Servicios)}
    href={`#${SelectedPage.Servicios}`}> 
    {children} </AnchorLink>
  )
}

export default ActionButton