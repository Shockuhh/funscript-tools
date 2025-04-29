import { z } from 'zod'

type FunscriptBookmark = {
  name: string
  time: string
}

type FunscriptChapter = {
  endTime: string
  name: string
  startTime: string
}

type FunscriptMetadata = {
  bookmarks?: FunscriptBookmark[]
  chapters?: FunscriptChapter[]
  creator?: string
  description?: string
  duration?: number
  license?: string
  notes?: string
  performers?: string[]
  script_url?: string
  tags?: string[]
  title?: string
  type?: string
  video_url?: string
}

export type FunscriptAction = {
  at: number
  pos: number
}

export type FunscriptAxis = {
  id: string
  actions: FunscriptAction[]
}

export type FunscriptSource = {
  actions: FunscriptAction[]
  axes?: FunscriptAxis[]
  inverted?: boolean
  metadata?: FunscriptMetadata
}

export const FunscriptActionSchema = z.object({
  at: z.number(),
  pos: z.number()
})

export const FunscriptAxisSchema = z.object({
  id: z.string(),
  actions: z.array(FunscriptActionSchema)
})

export const FunscriptBookmarkSchema = z.object({
  name: z.string(),
  time: z.string()
})

export const FunscriptChapterSchema = z.object({
  endTime: z.string(),
  name: z.string(),
  startTime: z.string()
})

export const FunscriptMetadataSchema = z.object({
  bookmarks: z.array(FunscriptBookmarkSchema).optional(),
  chapters: z.array(FunscriptChapterSchema).optional(),
  creator: z.string().optional(),
  description: z.string().optional(),
  duration: z.number().optional(),
  license: z.string().optional(),
  notes: z.string().optional(),
  performers: z.array(z.string()).optional(),
  script_url: z.string().optional(),
  tags: z.array(z.string()).optional(),
  title: z.string().optional(),
  type: z.string().optional(),
  video_url: z.string().optional()
})

export const FunscriptSourceSchema = z.object({
  actions: z.array(FunscriptActionSchema),
  axes: z.array(FunscriptAxisSchema).optional(),
  inverted: z.boolean().optional(),
  metadata: FunscriptMetadataSchema.optional()
})
