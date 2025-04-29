import { getContext, setContext } from 'svelte'
import {
  FunscriptSourceSchema,
  type FunscriptSource,
  type FunscriptAxis,
  type FunscriptAction
} from '$types/funscript'
import { z } from 'zod'
import { m } from '$lib/paraglide/messages'
import { toast } from 'svelte-sonner'
import { axisIdToFileMidExtension } from './funscript-maps'

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

  #separateAxes: (file: File, funscriptSource: FunscriptSource) => FileSource[] = (
    file,
    funscriptSource
  ) => {
    const strokeAxis: FileSource = {
      name: file.name,
      size: file.size,
      source: funscriptSource
    }

    if (!funscriptSource.axes) {
      return [strokeAxis]
    }

    let separatedAxes: FileSource[] = []
    funscriptSource.axes.forEach((axis) => {
      const midExtension = axisIdToFileMidExtension.get(axis.id)
      const [baseName, extension] = file.name.split('.')

      const axisSource: FileSource = {
        name: `${baseName}${midExtension}.${extension}`,
        size: file.size, // not perfect since this will reflect the size of the combined script, but likely won't be used?
        source: axis
      }

      separatedAxes.push(axisSource)
    })

    return separatedAxes
  }

  getFiles = () => {
    return this.files
  }

  getFileSources = () => {
    return this.fileSources
  }

  addFile = (file: File) => {
    if (this.files.some((f) => f.name === file.name && f.size === file.size)) {
      toast.warning(m.duplicate_funscript_file_uploaded())
      return
    }

    let parseSuccess = false
    file
      .text()
      .then((source) => {
        const parseResult = FunscriptSourceSchema.safeParse(JSON.parse(source))

        if (!parseResult.success) {
          const errorMessage = parseResult.error.issues.map((issue) => issue.message).join('\n')

          toast.error(m.funscript_parse_error_title(), {
            description: m.funscript_parse_error_description({ error: errorMessage })
          })
          console.warn(parseResult.error)
          return
        } else {
          parseSuccess = true
        }

        const separatedAxes = this.#separateAxes(file, parseResult.data ?? [])

        this.fileSources = [...this.fileSources, ...separatedAxes]
      })
      .finally(() => {
        if (parseSuccess) {
          toast.success(m.heatmap_generator_upload_success_title({ fileName: file.name }))

          this.files.push(file)
        }
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
