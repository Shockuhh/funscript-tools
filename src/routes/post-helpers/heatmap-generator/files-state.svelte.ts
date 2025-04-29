import { getContext, setContext } from 'svelte'
import { FunscriptSourceSchema, type FunscriptSource } from '$types/funscript'
import { z } from 'zod'
import { m } from '$lib/paraglide/messages'
import { toast } from 'svelte-sonner'

type FileSource = {
  name: string
  size: number
  source: FunscriptSource
}

export class FilesState {
  files = $state<File[]>([])
  fileSources = $state<FileSource[]>([])

  constructor() {
    this.files = []
    this.fileSources = []
  }

  getFiles = () => {
    return this.files
  }

  getFileSources = () => {
    return this.fileSources
  }

  addFile = (file: File) => {
    this.files.push(file)

    file.text().then((source) => {
      const parseResult = FunscriptSourceSchema.safeParse(source)

      if (!parseResult.success) {
        toast.error(m.funscript_parse_error_title(), {
          description: m.funscript_parse_error_description({ error: parseResult.error.format() })
        })
        return
      }

      const fileSource: FileSource = {
        name: file.name,
        size: file.size,
        source: parseResult.data
      }

      console.log('File source:', fileSource)
      this.fileSources.push(fileSource)
    })
  }

  removeFile = (file: File) => {
    this.files = this.files.filter((f) => f.name !== file.name && f.size !== file.size)
  }

  clearFiles = () => {
    this.files = []
  }
}

const FILES_KEY = Symbol('FILES_KEY')
export function setFilesState() {
  return setContext(FILES_KEY, new FilesState())
}

export function getFilesState() {
  return getContext<ReturnType<typeof setFilesState>>(FILES_KEY)
}
