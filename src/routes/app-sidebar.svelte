<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar'
  import type { SubrouteSection, SubrouteSectionData, TopLevelSectionData } from '../types/routes'

  let { data } = $props()
</script>

{#snippet sectionGroup(props: SubrouteSection)}
  <Sidebar.Group>
    <Sidebar.GroupLabel>
      {props.title}
    </Sidebar.GroupLabel>
    <Sidebar.GroupContent>
      <Sidebar.Menu>
        {#each props?.subSections as section (section.title)}
          {@render sectionItem(section, props.slug)}
        {/each}
      </Sidebar.Menu>
    </Sidebar.GroupContent>
  </Sidebar.Group>
{/snippet}

{#snippet sectionItem(props: SubrouteSectionData, parentSlug: string)}
  <Sidebar.MenuItem>
    <Sidebar.MenuButton>
      <a href={parentSlug.concat(props.slug)}
        ><span class="flex items-center gap-2"><props.icon /> {props.title}</span></a>
    </Sidebar.MenuButton>
  </Sidebar.MenuItem>
{/snippet}

<Sidebar.Root variant="inset" class="bg-sidebar">
  <Sidebar.Header>Funscript tools</Sidebar.Header>
  <Sidebar.Content>
    {#each data?.sections as section (section.title)}
      {@render sectionGroup(section)}
    {/each}
  </Sidebar.Content>
</Sidebar.Root>
