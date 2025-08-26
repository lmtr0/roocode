import type { ModelInfo } from "../model.js"

// Roo provider with single model
export type RooModelId = "roo/sonic"

export const rooDefaultModelId: RooModelId = "roo/sonic"

export const rooModels = {} as const satisfies Record<string, ModelInfo>
