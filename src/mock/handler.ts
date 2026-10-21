import { testImonialHandlers } from "./handlers/testimonial"
import { noticeHandlers } from "./handlers/notice"

export const handlers = [...testImonialHandlers, ...noticeHandlers]
