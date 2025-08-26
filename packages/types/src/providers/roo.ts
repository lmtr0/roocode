import type { ModelInfo } from "../model.js"

// Roo provider with single model
export type RooModelId = "roo/sonic"

export const rooDefaultModelId: RooModelId = "roo/sonic"

export const rooModels = {
	"roo/sonic": {
		contextWindow: 200000,
		supportsPromptCache: true,
		supportsImages: true,
		supportsComputerUse: true,
		inputPrice: 3.0,
		outputPrice: 15.0,
		cacheWritesPrice: 3.75,
		cacheReadsPrice: 0.3,
		description:
			"Roo Sonic is a blazing-fast model optimized for coding tasks, offering 200K context, prompt caching, and vision capabilities.",
	},
} as const satisfies Record<RooModelId, ModelInfo>
