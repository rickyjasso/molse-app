type Props = {
    title: string,
    body: string[],
    id: number,
    icon?: string
}

const Card = ({ title, body, id, icon }: Props) => {
  return (
    <div className="relative group">
      <div className="group flex-col mx-3 my-5 p-6 bg-white border rounded-xl shadow border-gray-700 hover:bg-molse-primary h-full flex items-center">
        {icon && ( 
          <img src={icon} alt={`${title} Icon`} className="w-12 h-12 mb-4" /> 
        )}
        <div className="flex items-center align-middle relative">
          <h3 className="absolute left-1/2 text-7xl transform -translate-x-1/2 font-bold opacity-10 text-molse-primary group-hover:text-white">0{id}</h3>
          <h5 className="my-3 text-xl font-bold tracking-tight text-black group-hover:text-white relative z-10">{title}</h5>
        </div>
        {body.map((paragraph, index) => ( 
          <p key={index} className="my-5 font-normal text-base text-gray-600 group-hover:text-white text-center relative z-10">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Card