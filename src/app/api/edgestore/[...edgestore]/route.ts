import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";

const es = initEdgeStore.create()
const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(),
})

const handler = createEdgeStoreNextHandler({
  logLevel: 'debug', // optional, defaults to 'error' in production and 'info' in development
  router: edgeStoreRouter
})

export { handler as GET, handler as POST }
export type EdgestoreRouter = typeof edgeStoreRouter