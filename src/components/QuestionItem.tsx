interface ICard {
  title: string;
  description: string;
  onChange: any;
  open: boolean;
}
const QuestionItem = ({ title, description, onChange, open}: ICard) => {
  return (
    
      <div
        className="pl-48 pr-48 sm:pl-2 sm:pr-2 md:pl-2 sm:pr-2 mb-16 mt-16"
      >
        <div>
          <p className="font-semibold text-secondary">{title}</p>
          <button onClick={onChange}>abrir</button>
        </div>
        {open &&
          <p className="mb-8 text-woodsmoke">{description}</p>
        }
        <div className="border-b-4 border-woodsmoke"></div>
      </div>
  )
}

export default QuestionItem;