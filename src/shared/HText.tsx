import React from "react"


type Props = {
    children: React.ReactNode,
    textSize: string,
}

const HText = ({children, textSize}: Props) => {
  return (
    <h1 className={`basis-3/5 font-timesnewroman ${textSize} font-bold`}>
        {children}
    </h1>
  )
}

export default HText