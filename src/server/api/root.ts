import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { bukhariRouter } from "./routers/bukhari";
import { muslimRouter } from "./routers/muslim";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  bukhari: bukhariRouter,
  muslim: muslimRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
