import type { millisecond } from './interfaces/millisecond'

export const generateId = (): string => {
  return Date.now() + '_' + Math.round(Math.random() * 1e12)
}

export const sleep = (delay: millisecond) =>
  new Promise<void>((resolve) => setTimeout(resolve, delay))
