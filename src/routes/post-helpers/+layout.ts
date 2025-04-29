import type { LayoutLoad } from './$types'
import Activity from '@lucide/svelte/icons/activity'
import Eye from '@lucide/svelte/icons/eye'
import type { SubrouteSection } from '../../types/routes'

export const _subrouteData: SubrouteSection = {
	title: 'Post helpers',
	slug: '/post-helpers',
	subSections: [
		{ slug: '/heatmap-generator', title: 'Heatmap generator', icon: Activity },
		{ slug: '/script-preview', title: 'Script preview', icon: Eye }
	]
}

export const load: LayoutLoad = () => {
	return {
		title: 'Post helpers',
		sections: _subrouteData
	}
}
