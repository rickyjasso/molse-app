type Props = {
    title: string,
    body: string[],
    id: number,
}

const Card = ({title, body, id}: Props) => {

  return (
  <div className="relative">
      <div className="group flex-col mx-3 my-5 p-6 bg-white border rounded-xl shadow border-gray-700 hover:bg-molse-primary h-full flex items-center">
        <div className="flex items-center align-middle relative">
          <h3 className="absolute left-1/2 text-7xl transform -translate-x-1/2 font-bold opacity-10 text-molse-primary group-hover:text-white">0{id}</h3>
          <h5 className="my-3 text-xl font-bold tracking-tight text-black group-hover:text-white relative z-10">{title}</h5>
        </div>
        <p className="my-5 font-normal text-base text-gray-600 group-hover:text-white text-center relative z-10">{body}.</p>
      </div>
    </div>
  )
}

export default Card