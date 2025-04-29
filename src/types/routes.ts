import type { Component } from 'svelte'

export type TopLevelSectionData = {
	title: string
	sections: SubrouteSection[]
}

export type SubrouteSection = {
	slug: string
	title: string
	subSections: SubrouteSectionData[]
}

export type SubrouteSectionData = {
	slug: string
	title: string
	icon?: Component
}
