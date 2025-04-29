import type { LayoutLoad } from './$types'
import { _subrouteData as helperSubroutes } from './post-helpers/+layout'
import { _subrouteData as modifySubroutes } from './funscript-modify/+layout'

export const load: LayoutLoad = () => {
	return {
		sections: [helperSubroutes, modifySubroutes]
	}
}
