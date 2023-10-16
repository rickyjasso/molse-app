type Props = {
    title: string,
    body: string[],
}

const Card = ({title, body}: Props) => {
  return (
    <div>
        <div className="group block mx-3 my-12 m max-w-sm p-6 bg-white border rounded-lg shadow border-gray-700 hover:bg-molse-primary">
            <h5 className="my-3 text-xl font-bold tracking-tight text-black group-hover:text-white ">{title}</h5>
            <p className="my-5 font-normal text-base text-gray-600 group-hover:text-white text-center">{body}.</p>
        </div>

    </div>
  )
}

export default Card