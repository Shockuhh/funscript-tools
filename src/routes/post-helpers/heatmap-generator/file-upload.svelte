<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte'
  import { m } from '$lib/paraglide/messages'
  import { toast } from 'svelte-sonner'
  import { getFilesState } from './files-state.svelte'
  import {
    displaySize,
    FileDropZone,
    MEGABYTE,
    type FileDropZoneProps,
    type FileRejectedReason
  } from '$lib/components/ui/file-drop-zone'

  const filesState = getFilesState()

  const onUpload: FileDropZoneProps['onUpload'] = async (files: File[]) => {
    await Promise.allSettled(
      files.map((file) => {
        filesState.addFile(file)

        toast.success(m.heatmap_generator_upload_success_title({ fileName: file.name }))
      })
    )
  }

  const onFileRejected: FileDropZoneProps['onFileRejected'] = ({ reason, file }) => {
    toast.error(m.heatmap_generator_upload_error_title({ fileName: file.name }), {
      description: m.heatmap_generator_upload_error_description({ error: reason })
    })
  }
</script>

<FileDropZone
  onUpload={onUpload}
  onFileRejected={onFileRejected}
  class="h-64 w-full"
  accept={'.funscript'} />
