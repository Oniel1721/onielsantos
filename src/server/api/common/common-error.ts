import { type TRPC_ERROR_CODE_KEY, TRPCError } from "@trpc/server";

type AppErrorInput = {
  code: TRPC_ERROR_CODE_KEY;
  message: string;
  context?: unknown;
  internalError?: unknown;
};

export class AppError extends Error {
  code: TRPC_ERROR_CODE_KEY;
  context?: unknown;
  internalError?: unknown;
  constructor(input: AppErrorInput) {
    super(input.message);
    this.name = "AppError";
    this.code = input.code;
    this.context = input.context;
    this.internalError = input.internalError;
  }
}

export async function handleTRPC<T>(cb: () => Promise<T> | T) {
  try {
    return await cb();
  } catch (e) {
    if (e instanceof AppError) {
      console.log(e.internalError);
      throw new TRPCError({
        code: e.code,
        message: e.message,
        cause: e,
      });
    }
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Unexpected error happened",
    });
  }
}
