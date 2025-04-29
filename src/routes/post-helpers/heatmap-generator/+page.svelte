<script lang="ts">
  import Card from '$lib/components/ui/card/card.svelte'
  import FileUpload from './file-upload.svelte'
  import { m } from '$lib/paraglide/messages'
  import { setFilesState, getFilesState } from './files-state.svelte'
  import Button from '$lib/components/ui/button/button.svelte'
  import Heatmap from './heatmap.svelte'

  setFilesState()
  const filesState = getFilesState()

  let showHeatmap = $state(false)

  const onGenerateClick = () => {
    showHeatmap = true
  }
</script>

<h1 class="prose prose-xl">{m.heatmap_generator_title()}</h1>
<Card class="p-2">
  <FileUpload />
  <div class="mt-2">
    {#if filesState.getFiles().length > 0}
      <h2 class="prose prose-lg font-bold">{m.heatmap_generator_uploaded_files()}</h2>
      <p class="italic text-muted-foreground">{m.heatmap_generator_uploaded_files_description()}</p>
      <ul class="mt-2 list-none pl-5">
        {#each filesState.getFiles() as file, i (`${file.name}-${file.bytes}`)}
          <li>{file.name} ({Math.round(file.size / 1024)} KB)</li>
        {/each}
      </ul>
      <Button onclick={onGenerateClick} class="mt-2">
        {m.heatmap_generator_generate_heatmap()}
      </Button>
    {:else}
      <p>{m.heatmap_generator_no_files_uploaded()}</p>
    {/if}
    {#if showHeatmap}
      <Heatmap />
    {/if}
  </div>
</Card>
