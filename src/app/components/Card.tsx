interface ICard {
  title: string,
  description: string,
}
const Card = ({ title, description}: ICard) => {
  return (
    <div className="flex flex-none flex-col items-center space-y-1">
      <div
        className="rounded-lg bg-white w-72 h-80 p-4 pb-12"
      >
        <p className="text-blue mb-2 text-smx">{title}</p>
        <div className="border-b-4 border-woodsmoke"></div>
        <p className="text-sm text-secondary mt-4 h-3/4">{description}</p>
        <div className="text-blue text-smx flex justify-end float-right float-bottom">
          Más info
        </div>
      </div>
    </div>
  )
}

export default Card;