import { useQuizStore } from "../store/quizStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const CongratsPage = () => {
  const navigate = useNavigate();
  const { score, questions } = useQuizStore();

  if (!questions || questions.length === 0) {
    return (
      <div className="background min-h-screen bg-gray-50 text-gray-100 flex items-center justify-center">
        <p className="text-slate-700">No results found.</p>
      </div>
    );
  }

  const percentage = Math.round((score / questions.length) * 100);

  const getIQRange = () => {
    if (percentage >= 90) return "145 - 160";
    if (percentage >= 75) return "130 - 145";
    if (percentage >= 60) return "120 - 130";
    return "110 - 120";
  };

  const getComparison = () => {
    if (percentage >= 90) {
      return "Albert Einstein and Isaac Newton";
    }
    if (percentage >= 75) {
      return "Nikola Tesla and Marie Curie";
    }
    if (percentage >= 60) {
      return "Leonardo da Vinci and Ada Lovelace";
    }
    return "high-performing analytical thinkers worldwide";
  };

  // 🎉 Confetti Effect
  useEffect(() => {
    if (percentage < 40) return;

    const duration = 4000;
    const end = Date.now() + duration;

    const shoot = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#facc15", "#60a5fa", "#f97316"],
      });

      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#facc15", "#60a5fa", "#f97316"],
      });
    };

    const frame = () => {
      confetti({
        particleCount: 3,
        spread: 60,
        origin: { y: 0.6 },
        scalar: 0.8,
        colors: ["#facc15", "#60a5fa", "#f97316"],
      });

      shoot();

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, [percentage]);

  return (
    <>
      <div className="background min-h-screen bg-gray-50 text-gray-100">
        <div className="priCongratsContainer bg-slate-700 min-h-screen m-0.5 p-6 rounded-4xl flex flex-col items-center justify-center text-center">

          <svg
            width="800"
            height="800"
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-60 h-60"
          >
            <g>
              <g>
                <path
                  className="fill-yellow-400"
                  d="M74.5 101.6h-5.3v-2c0-.8-.6-1.4-1.4-1.4H65l-1-7.3h2.2c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4h-2.6l-.3-2h-6.9l-.3 2h-2.6c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4h2.2l-1 7.3h-2.8c-.8 0-1.4.6-1.4 1.4v2h-5.3c-2 0-3.6 1.6-3.6 3.6v4.5H78v-4.5C78.1 103.2 76.5 101.6 74.5 101.6z"
                />
                <path
                  className="fill-yellow-400"
                  d="M75.7 30.1v6h25V51c-1.4 2.6-8.5 14-29 11.5l-.7 6c2.3.3 4.5.4 6.6.4 22 0 28.7-15.3 29-16l.2-.6V30.1H75.7z"
                />
                <path
                  className="fill-yellow-400"
                  d="M48.9 68.4l-.7-6c-20.5 2.6-27.7-8.9-29-11.5V36.1h25v-6h-31v22.2l.2.6c.3.7 7 16 29 16C44.4 68.8 46.6 68.7 48.9 68.4z"
                />
              </g>
              <g>
                <polygon
                  className="fill-blue-400"
                  points="81.3,30.1 81.3,93.1 88.4,87.1 95.5,93.1 95.5,30.1"
                />
                <polygon
                  className="fill-blue-400"
                  points="24.4,93.1 31.5,87.1 38.6,93.1 38.6,30.1 24.4,30.1"
                />
              </g>
              <path
                className="fill-yellow-400"
                d="M60 89.3c-16.4 0-29.7-13.3-29.7-29.7v-40h59.3v40C89.6 76 76.3 89.3 60 89.3z"
              />
              <path
                className="fill-orange-400"
                d="M60.6 36.5l3.8 7.6c.1.2.3.4.6.4l8.4 1.2c.6.1.8.8.4 1.3l-6.1 5.9c-.2.2-.3.4-.2.7l1.4 8.4c.1.6-.5 1.1-1.1.8l-7.5-4c-.2-.1-.5-.1-.7 0l-7.5 4c-.5.3-1.2-.2-1.1-.8l1.4-8.4c0-.2 0-.5-.2-.7L46.1 47c-.4-.4-.2-1.2.4-1.3l8.4-1.2c.2 0 .4-.2.6-.4l3.8-7.6C59.6 35.9 60.3 35.9 60.6 36.5z"
              />
            </g>
          </svg>

          <p className="priCongratsText font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6">
            Congratulations!!!
          </p>

          <p className="secCongratsText font-semibold text-base sm:text-lg md:text-xl mt-4 max-w-2xl">
            You scored higher than{" "}
            <span className="font-black">{percentage}%</span> of participants.
            <br />
            Estimated IQ range:{" "}
            <span className="font-black">{getIQRange()}</span>
          </p>


          <div className="comparisonContainer mt-8 px-6 py-4 bg-slate-600/40 rounded-2xl max-w-md sm:max-w-lg">
            <p className="comparisonText text-sm sm:text-base text-slate-200">
              Your estimated range overlaps with figures historically believed
              to score similarly, such as{" "}
              <span className="font-semibold">{getComparison()}</span>.
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            aria-label="Retake Quiz"
            className="retakeButton mt-8 px-8 py-3 bg-white text-slate-800 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </>
  );
};

export default CongratsPage;