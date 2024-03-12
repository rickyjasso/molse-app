import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink className="rounded-md md:text-2xl text-xl md:tracking-wider text-molse-primary font-timesnewroman md:font-semibold font-bold bg-white md:px-20 px-10 md:py-2 py-3 hover:bg-molse-primary hover:text-white transition duration-500" 
    onClick={() => setSelectedPage(SelectedPage.Servicios)}
    href={`#${SelectedPage.Servicios}`}> 
    {children} </AnchorLink>
  )
}

export default ActionButton