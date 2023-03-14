export const generateId = (): string => {
  return Date.now() + '_' + Math.round(Math.random() * 1e12)
}
