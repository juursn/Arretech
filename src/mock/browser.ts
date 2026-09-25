import { setupWorker } from "msw/browser"
import { testImonialHandlers } from "./handlers/testimonial"

export const worker = setupWorker(...testImonialHandlers)
