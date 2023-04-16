/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type GetAllProcedureResult } from "~/utils/types";

const url = process.env.HADITH_API_URL || "http://localhost:3300/books/bukhari";

export const bukhariRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const from = 1;
    const to = 10;
    const response: Response = await fetch(`${url}?range=${from}-${to}`);
    const parsed = await response.json();
    return parsed?.data?.hadiths as GetAllProcedureResult;
  }),
});
