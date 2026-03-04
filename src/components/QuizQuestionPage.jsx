import { useQuizStore } from "../store/quizStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const QuizQuestionPage = () => {

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const {
    questions,
    currentIndex,
    score,
    nextQuestion,
    incrementScore,
  } = useQuizStore();

  // Safety check 
  if (!questions || questions.length === 0) {
    return <p className="text-center mt-20">No quiz data found.</p>;
  }

  const question = questions[currentIndex];

  const handleAnswerClick = (answer) => {
    if (answer === question.correctAnswer) {
      incrementScore();
    }

    if (currentIndex + 1 < questions.length) {
      nextQuestion();
    } else {
      navigate("/result");
    }
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

  return (
    <div className="background min-h-screen bg-gray-50 text-gray-100">

      <div className="priQuizContainer bg-slate-700 m-0.5 p-6 rounded-4xl h-[60vh] flex items-center justify-center text-center">
        <p className="questionText text-xl font-semibold">
          {question.question}
        </p>
      </div>

      <div className="text-center mt-4 font-bold text-black">
        Score: {score}
      </div>

      <div className="optionsContainer m-6 flex flex-col items-center gap-4">

        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className="p-3 w-[90vw] bg-slate-700 rounded-2xl
            shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-slate-500 hover:scale-105"
          >
            {String.fromCharCode(65 + index)}. {answer}
          </button>
        ))}

      </div>
    </div>
  );
};

export default QuizQuestionPage;