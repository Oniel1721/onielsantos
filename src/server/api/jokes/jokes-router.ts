import { TRPCError } from "@trpc/server";
import z from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const jokesRouter = createTRPCRouter({
  random: publicProcedure.query(async ({ ctx }) => {
    const jokes = await ctx.db.joke.findMany({});
    if (jokes.length === 0) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "No jokes found in the database.",
      });
    }
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];

    return randomJoke;
  }),
  createJoke: publicProcedure
    .input(z.object({ content: z.string().min(2) }))
    .mutation(async ({ ctx, input }) => {
      const newJoke = await ctx.db.joke.create({
        data: {
          content: input.content,
        },
      });

      return newJoke;
    }),
  get: publicProcedure
    .input(z.object({ id: z.number().positive().int() }))
    .query(async ({ ctx, input }) => {
      const joke = await ctx.db.joke.findUnique({
        where: { id: input.id },
      });
      if (!joke) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Joke not found.",
        });
      }
      return joke;
    }),
});
