import type { SubrouteSection } from '../../types/routes'
import type { LayoutLoad } from './$types'
import UnfoldHorizontal from '@lucide/svelte/icons/unfold-horizontal'
import UnfoldVertical from '@lucide/svelte/icons/unfold-vertical'

export const _subrouteData: SubrouteSection = {
	title: 'Funscript modifiers',
	slug: '/funscript-modify',
	subSections: [
		{ slug: '/offset', title: 'Offset script', icon: UnfoldHorizontal },
		{ slug: '/halver-doubler', title: 'Halver / doubler', icon: UnfoldVertical }
	]
}

export const load: LayoutLoad = () => {
	return _subrouteData
}
