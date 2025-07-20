import { studioRouter } from "@/modules/studio/server/procedures";

import { createTRPCRouter } from "../init";
import { categoriesRouter } from "@/scripts/server/procedure";
import { videosRouter } from "@/modules/videos/server/procedures";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  videos: videosRouter,
});
export type AppRouter = typeof appRouter;