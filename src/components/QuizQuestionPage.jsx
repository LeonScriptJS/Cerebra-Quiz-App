import { useQuizStore } from "../store/quizStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const QuizQuestionPage = () => {
const [selectedAnswer, setSelectedAnswer] = useState(null);
const [isLocked, setIsLocked] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const {
    questions,
    currentIndex,
    nextQuestion,
    incrementScore,
  } = useQuizStore();

  // Safety check 
  if (!questions || questions.length === 0 || currentIndex >= questions.length) {
  return <p className="text-center mt-20">No quiz data found.</p>;
}

  const question = questions[currentIndex];

  const handleAnswerClick = (answer) => {
  if (isLocked) return;

  setSelectedAnswer(answer);
  setIsLocked(true);

  if (answer === question.correctAnswer) {
    incrementScore();
  }

  setTimeout(() => {
    if (currentIndex + 1 < questions.length) {
      nextQuestion();
      setSelectedAnswer(null);
      setIsLocked(false);
    } else {
      navigate("/result");
    }
  }, 1000);
};

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 600);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="animate-pulse space-y-4 w-[90vw]">

        <div className="h-40 bg-slate-700 rounded-3xl"></div>

        <div className="h-12 bg-slate-700 rounded-2xl"></div>
        <div className="h-12 bg-slate-700 rounded-2xl"></div>
        <div className="h-12 bg-slate-700 rounded-2xl"></div>
        <div className="h-12 bg-slate-700 rounded-2xl"></div>

      </div>
    </div>
  );
}

const progressPercentage =
  ((currentIndex + 1) / questions.length) * 100;


  return (
    <div className="background min-h-screen bg-gray-50 text-gray-100">


<div className="w-full px-6 pt-3 mb-3">

  <div className="h-2 w-full bg-slate-300 rounded-full overflow-hidden">

    <div
      className="h-full bg-slate-800 transition-all duration-700 ease-out"
      style={{ width: `${progressPercentage}%` }}
    />

  </div>
</div>
      <div className="priQuizContainer bg-slate-700 m-0.5 p-6 rounded-4xl h-[60vh] flex items-center justify-center text-center">
        <p className="questionText text-xl font-semibold transition-opacity duration-300">
          {question.question}
        </p>
      </div>


      <div className="optionsContainer m-6 flex flex-col items-center gap-4">

        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className={`p-3 w-[90vw] rounded-2xl shadow-md transition-all duration-300
${
  selectedAnswer
    ? answer === question.correctAnswer
      ? "bg-green-600"
      : answer === selectedAnswer
      ? "bg-red-600"
      : "bg-slate-700 opacity-50"
    : "bg-slate-700 hover:bg-slate-500 hover:scale-105"
}`}>
            {String.fromCharCode(65 + index)}. {answer}
          </button>
        ))}

      </div>
    </div>
  );
};

export default QuizQuestionPage;