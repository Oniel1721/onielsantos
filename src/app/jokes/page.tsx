"use client";

import { useState } from "react";

import { api } from "@/lib/trpc/react";

export default function JokesPage() {
  const [jokeInput, setJokeInput] = useState("");
  const [submitError, setSubmitError] = useState("");

  const {
    data: joke,
    refetch,
    isLoading,
    isError,
    error,
  } = api.joke.random.useQuery(undefined, {
    retry: false,
  });

  const isEmpty = isError && error?.data?.code === "NOT_FOUND";
  const hasError = isError && !isEmpty;

  const createJoke = api.joke.createJoke.useMutation({
    onSuccess: () => {
      setJokeInput("");
      setSubmitError("");
      void refetch();
    },
    onError: (err) => {
      setSubmitError(err.message);
    },
  });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (jokeInput.trim().length < 2) {
      setSubmitError("Joke must be at least 2 characters.");
      return;
    }
    createJoke.mutate({ content: jokeInput.trim() });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-8 px-6 py-16">
      <h1 className="text-5xl font-bold tracking-tight">😂 Jokes</h1>

      {/* Random joke card */}
      <section className="w-full max-w-xl bg-gray-900 rounded-3xl p-10 flex flex-col gap-6 shadow-xl">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
          Random Joke
        </h2>

        <div className="min-h-16 flex items-center">
          {isLoading && (
            <p className="text-gray-400 animate-pulse text-lg">Loading a joke…</p>
          )}
          {isEmpty && (
            <p className="text-gray-400 italic text-lg">
              No jokes yet — be the first to add one below!
            </p>
          )}
          {hasError && (
            <p className="text-red-400 text-lg">{error?.message}</p>
          )}
          {joke && (
            <p className="text-2xl leading-relaxed font-medium">{joke.content}</p>
          )}
        </div>

        <button
          type="button"
          onClick={() => void refetch()}
          disabled={isLoading}
          className="w-full rounded-2xl bg-indigo-600 px-6 py-4 text-base font-semibold hover:bg-indigo-500 active:scale-95 disabled:opacity-50 transition-all duration-150 cursor-pointer"
        >
          🎲 New joke
        </button>
      </section>

      {/* Submit joke card */}
      <section className="w-full max-w-xl bg-gray-900 rounded-3xl p-10 flex flex-col gap-6 shadow-xl">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
          Submit a Joke
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            value={jokeInput}
            onChange={(e) => setJokeInput(e.target.value)}
            placeholder="Write your joke here…"
            rows={4}
            className="w-full rounded-2xl bg-gray-800 border border-gray-700 px-5 py-4 text-white text-base placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {submitError && (
            <p className="text-red-400 text-sm px-1">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={createJoke.isPending}
            className="w-full rounded-2xl bg-emerald-600 px-6 py-4 text-base font-semibold hover:bg-emerald-500 active:scale-95 disabled:opacity-50 transition-all duration-150 cursor-pointer"
          >
            {createJoke.isPending ? "Submitting…" : "✅ Submit joke"}
          </button>
        </form>
      </section>
    </main>
  );
}
