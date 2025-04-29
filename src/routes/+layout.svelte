<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar'
  import '../app.css'
  import { ModeWatcher } from 'mode-watcher'
  import AppSidebar from './app-sidebar.svelte'
  import SidebarInset from '$lib/components/ui/sidebar/sidebar-inset.svelte'
  import ThemeSwitcher from '$lib/components/theme-switcher.svelte'
  import { Toaster } from '$lib/components/ui/sonner'

  let { children, data } = $props()
</script>

<Sidebar.Provider>
  <ModeWatcher />
  <Toaster richColors />
  <AppSidebar data={data} />
  <SidebarInset>
    <div class="m-2 flex justify-between">
      <Sidebar.Trigger />
      <ThemeSwitcher />
    </div>
    <main class="m-2">
      {@render children()}
    </main>
  </SidebarInset>
</Sidebar.Provider>
