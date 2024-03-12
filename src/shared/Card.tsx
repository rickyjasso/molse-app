type Props = {
  title: string;
  body: string | string[]; // Accepts either a string or an array of strings
  id: string;
  icon?: string;
};

const Card = ({ title, body, id, icon }: Props) => {
  const bodyArray = typeof body === 'string' ? [body] : body;

  return (
    <div className="relative">
      <div className="group flex-col mx-3 my-5 p-6 bg-white shadow flex transition-all items-center h-auto">
        {icon && <img src={icon} alt={`${title} Icon`} className="w-16 h-16 mb-4 md:self-end" />}
        <div className="flex align-middle items-center relative mb-6">
          <h3 className="absolute left-1/2 text-9xl transform -translate-x-1/2  font-bold opacity-30 text-molse-secondary ">
            0{id}
          </h3>
          <h5 className="my-3 md:text-4xl text-3xl font-bold text-center tracking-wide text-molse-primary z-10">{title}</h5>
        </div>
        {bodyArray.map((paragraph, index) => (
          <p key={index} className="my-5 tracking-widest font-normal md:text-lg text-base text-molse-secondary md:text-justify text-center relative z-10">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;