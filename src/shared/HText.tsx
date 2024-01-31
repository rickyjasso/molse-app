import React from "react"


type Props = {
    children: React.ReactNode,
    textSize: string,
}

const HText = ({children, textSize}: Props) => {
  return (
    <h1 className={`basis-3/5 font-timesnewroman ${textSize}`}>
        {children}
    </h1>
  )
}

export default HText