<!--
	Installed from github/ieedan/shadcn-svelte-extras
-->

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui'
	import { cn } from '$lib/utils/utils.js'

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: DropdownMenuPrimitive.SeparatorProps = $props()
</script>

<DropdownMenuPrimitive.Separator
	bind:ref={ref}
	class={cn('-mx-1 my-1 h-px bg-muted', className)}
	{...restProps} />
