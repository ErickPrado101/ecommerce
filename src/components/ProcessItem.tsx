interface ProcessProps {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
}

export const ProcessItem = (props: ProcessProps) => {
  return (
    <div className="flex gap-4 md:gap-8 font-sans">
      <div className="flex items-center w-2/5">
        <img
          src={props.image}
          alt={props.alt}
          className="object-contain w-full max-h-72"
        />
      </div>
      <div className="flex flex-col justify-center w-3/5">
        <h3 className="uppercase text-secundary-light tracking-wide font-medium">
          {props.id}. {props.title}
        </h3>
        <p className="sm:pr-8 text-sm sm:text-base">{props.description}</p>
      </div>
    </div>
  );
};
