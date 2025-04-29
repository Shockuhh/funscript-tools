<script lang="ts">
  import { Stage, Group, Layer, Rect } from 'svelte-konva'
  import { getFilesState } from './files-state.svelte'

  const AXIS_GROUP_PX = [1000, 100]
  const AXIS_ID_LABEL_PX = [30, 100]

  const filesState = getFilesState()

  const sources = $derived(filesState.getFileSources().map((fileSource) => fileSource.source))

  $inspect(sources)
</script>

<Stage
  config={{ width: AXIS_GROUP_PX[0], height: filesState.getFiles().length * AXIS_GROUP_PX[1] }}>
  <Layer>
    {#each sources as source, i}
      <Group
        config={{
          x: 0,
          y: (i + 1) * AXIS_GROUP_PX[1],
          width: AXIS_GROUP_PX[0],
          height: AXIS_GROUP_PX[1]
        }}>
        <Rect
          config={{ x: 0, y: 0, width: AXIS_ID_LABEL_PX[0], height: AXIS_ID_LABEL_PX[1] }}
          fill="blue" />
      </Group>
    {/each}
  </Layer>
</Stage>
