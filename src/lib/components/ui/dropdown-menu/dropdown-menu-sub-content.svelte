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
	}: DropdownMenuPrimitive.SubContentProps = $props()
</script>

<DropdownMenuPrimitive.SubContent
	bind:ref={ref}
	class={cn(
		'z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-lg focus:outline-none',
		className
	)}
	{...restProps} />
