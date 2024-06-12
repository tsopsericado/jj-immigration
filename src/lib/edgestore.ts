"use client"

import { type EdgestoreRouter } from "@/api/edgestore/[...edgestore]/route"
import { createEdgeStoreProvider } from "@edgestore/react"

const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider<EdgestoreRouter>()
export { EdgeStoreProvider, useEdgeStore }