import { resolve } from 'path'
const resolver = (mainPath: string) => resolve(__dirname, mainPath);

export const alias: Record<string, string> = {
  '~~': resolver('.'),
  '~~/': resolver('./'),
  '@@': resolver('.'),
  '@@/': resolver('./'),
}
