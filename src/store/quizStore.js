import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useQuizStore = create(
  persist(
    (set) => ({
      questions: [],
      currentIndex: 0,
      score: 0,

      setQuestions: (questions) =>
        set({
          questions,
          currentIndex: 0,
          score: 0,
        }),

      nextQuestion: () =>
        set((state) => ({
          currentIndex: state.currentIndex + 1,
        })),

      incrementScore: () =>
        set((state) => ({
          score: state.score + 1,
        })),

      resetQuiz: () =>
        set({
          questions: [],
          currentIndex: 0,
          score: 0,
        }),
    }),
    {
      name: "quiz-storage", // localStorage key
    }
  )
);