<script lang="ts">
  import { Stage, Layer, Rect } from 'svelte-konva'
  import { getFilesState } from './files-state.svelte'

  const AXIS_SIZE_Y_PX = 100
  const AXIS_SIZE_X_PX = 1000

  const filesState = getFilesState()

  $inspect(filesState.getFileSources())
</script>

<p>{filesState.getFileSources()}</p>
<Stage config={{ width: AXIS_SIZE_X_PX, height: filesState.getFiles().length * AXIS_SIZE_Y_PX }}>
</Stage>
