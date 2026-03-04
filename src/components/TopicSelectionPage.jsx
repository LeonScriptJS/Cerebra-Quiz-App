import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../services/quizAPI";
import { useState } from "react";
import { useQuizStore } from "../store/quizStore";

const TopicSelectionPage = () => {
  // {================================= LOGIC ============================================}

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const setQuestions = useQuizStore((state) => state.setQuestions);

  const handleTopicClick = async (topicKey) => {
    try {
      setLoading(true);

      const questions = await fetchQuestions(topicKey);

      // Store temporarily in sessionStorage
      setQuestions(questions);

      navigate("/quiz");
    } catch (error) {
      console.error(error);
      alert("Failed to load quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // {=========================================================================================================================================================================================================}

  return (
    <>
      <div className="background min-h-screen bg-gray-50 text-gray-100">
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
          {/* {================================= Science 'N' Nature ============================================} */}
          <div
            onClick={() => handleTopicClick("scienceNNature")}
            className="scienceSection bg-slate-700 rounded-2xl p-8 flex flex-col items-center gap-6
          shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-atom-icon lucide-atom"
            >
              <circle cx="12" cy="12" r="1" />
              <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
              <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
            </svg>
            <p className="scienceText font-semibold text-[18px] md:text-[20px] lg:text-[25px]">
              Science 'N' Nature
            </p>
          </div>

          {/* {=============================================================================} */}

          {/* {================================= Tech 'N' Nature ============================================} */}

          <div
            onClick={() => handleTopicClick("techNComputer")}
            className="techSection bg-slate-700 rounded-2xl p-8 flex flex-col items-center gap-6
          shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-laptop-icon lucide-laptop"
            >
              <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
              <path d="M20.054 15.987H3.946" />
            </svg>
            <p className="techText font-semibold text-[18px] md:text-[20px] lg:text-[25px]">
              Tech 'N' Computer
            </p>
          </div>

          {/* {============================================================================} */}

          {/* {================================= Sports ============================================} */}

          <div
            onClick={() => handleTopicClick("sports")}
            className="sportSection bg-slate-700 rounded-2xl p-8 flex flex-col items-center gap-6
          shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="108"
              height="108"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-volleyball-icon lucide-volleyball"
            >
              <path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4" />
              <path d="M12 12a12.6 12.6 0 0 1-8.7 5" />
              <path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5" />
              <path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" />
              <path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <p className="sportText font-semibold text-[18px] md:text-[20px] lg:text-[25px]">
              Sports
            </p>
          </div>

          {/* {=============================================================================} */}

          {/* {================================= Anime 'N' Manga ============================================} */}

          <div
            onClick={() => handleTopicClick("animeNManga")}
            className="animeSection bg-slate-700 rounded-2xl p-8 flex flex-col items-center gap-6
          shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400 hover:scale-105"
          >
            <svg
              className="w-30 h-30 text-gray-100"
              viewBox="144 144 512 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m525.46 478.77 101.02-56.387-71.391-4.2969 41.039-36.762-91.375 7.1406s-1.9609-14.449-20.703-33.195c-11.422-11.422-37.117-18.918-37.117-18.918s3.6562-46.57-22.398-87.98c-16.496-21.598-50.418-27.312-84.324-36.59 26.059 74.242 16.418 103.51 16.418 103.51s-37.477-41.766-79.598-48.188c-24.621-1.4297-76.023 25.699-103.6 43.902 97.539 50.684 108.25 101.72 108.25 101.72-36.051 3.2109-99.23 40.688-99.23 40.688 77.809 14.992 103.87 33.547 103.87 33.547l-43.188 24.988 87.336 8.7617c-5.0898-3.6719-16.191-17.043-18.438-24.656-2.3594-7.9922-1.4219-33.676 6.6016-35.246 4.168-.82031 7.1445 1.1172 8.8984 3.7266-.17578-1.8477-.25-3.6719-.25-5.4805 0-38.199 36.77-65.395 74.887-65.395 39.91 0 87.297 14.012 83.57 55.078 1.7539-2.6211-4.2227 11.246-.050781 12.07 8.0117 1.5781 8.9492 27.258 6.5938 35.246-2.3711 7.9922-14.555 22.445-19.219 25.246-2.2148 1.3086-3.8438 1.5781-4.9414 1.4961-.65625 2.8281-1.3438 5.2617-2.0547 7.2891l59.402-2.0664-27.477-13.203 77.098-22.848z" />
                <path d="m403.68 579.59c-.73438 0-1.2656-.019532-1.5312-.03125-.26172.011718-.79688.03125-1.5352.03125-4.4141 0-12.734-.52344-18.898-3.9336-19.383-10.766-42.906-36.125-45.328-40.719-1.0781-2.0469-2.0977-4.9688-3.0977-8.8867-1.2461-.32422-2.5391-.90234-3.8711-1.6719-5.4141-3.2344-18.227-18.523-20.828-27.297-2.0156-6.8359-2.0625-26.32 3.1992-35 1.6289-2.6758 3.6875-4.293 6.1328-4.7695 2.0195-.39453 3.9961-.32422 5.7852.17578.46875-18.418 9.0977-35.484 24.426-48.184 14.707-12.203 34.395-19.199 54.02-19.199 33.465 0 61.887 9.2539 76.051 24.754 8.168 8.9258 11.934 19.82 11.227 32.363.44922 1.1641.10547 2.3984-.37891 4.1445-.84766 3.043-1.2852 5.1641-1.3242 6.3438 1.8555.73438 3.4609 2.207 4.7773 4.3789 5.2539 8.6719 5.2148 28.164 3.2109 34.984-2.6016 8.7852-15.41 24.078-20.824 27.297-1.3398.78516-2.6289 1.3672-3.8828 1.6836-1.0039 3.9141-2.0156 6.8359-3.0898 8.8828-2.4141 4.5898-25.926 29.945-45.332 40.727-6.1641 3.4023-14.488 3.9258-18.906 3.9258z" />
                <path d="m314.52 460.2 20.344 23.195-2.1445-18.559 16.777 15.703s-3.5664-21.422.71484-33.438c5.4766-11.656 19.633-18.328 19.633-18.328s-1.6523 42.109 1.7852 59.965c11.191-21.539 45.332-62.461 63.898-69.605 5.3516 22.012-2.1406 56.629-5.3516 73.164 16.43-17.598 37.84-51.625 38.91-58.887 0 0 2.4727 1.2695 3.5664 3.9258 1.875 4.5508-4.9922 29.629-8.5547 39.621 4.9883-2.9844 14.637-10.352 14.637-10.352l-8.9258 18.914s23.91-15.586 26.41-19.629c5.1172-7.2461 15-62.824 15-62.824l-151.34-33.906-56.395 42.48z" />
              </g>
            </svg>

            <p className="animeText font-semibold text-[18px] md:text-[20px] lg:text-[25px]">
              Anime'N' Manga
            </p>
          </div>

          {/* {=============================================================================} */}
        </main>
      </div>
    </>
  );
};

export default TopicSelectionPage;
