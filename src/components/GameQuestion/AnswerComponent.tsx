import "./GameQuestion.css";

interface AnswerComponentProps {
  answer: string;
  funName: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const AnswerComponent: React.FC<AnswerComponentProps> = ({answer, funName}) => {

  return (
    <div
      className='AnswerComponent'
      onClick={funName}
    >
      <p>{answer}</p>
    </div>
  );
};

export default AnswerComponent;
