import axios from "axios";

export const categoryMap = {
  scienceNNature: 17,
  techNComputer: 18,
  sports: 21,
  animeNManga: 31,
};

export const fetchQuestions = async (selectedTopic) => {
  const categoryId = categoryMap[selectedTopic];

  if (!categoryId) {
    throw new Error("Invalid category selected");
  }

  const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple&encode=url3986`;

  const { data } = await axios.get(url);

  if (data.response_code !== 0) {
    throw new Error("Failed to fetch questions");
  }

  return data.results.map((q) => {
    const answers = [
      ...q.incorrect_answers,
      q.correct_answer,
    ].sort(() => Math.random() - 0.5);

    return {
      question: decodeURIComponent(q.question),
      answers: answers.map((a) => decodeURIComponent(a)),
      correctAnswer: decodeURIComponent(q.correct_answer),
      difficulty: q.difficulty,
    };
  });
};