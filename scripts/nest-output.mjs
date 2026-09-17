import { readdirSync, mkdirSync, renameSync } from 'node:fs'
import { join } from 'node:path'

const outDir = 'out'
const nestedDir = join(outDir, 'docs')

mkdirSync(nestedDir, { recursive: true })

for (const entry of readdirSync(outDir)) {
  if (entry === 'docs') continue
  renameSync(join(outDir, entry), join(nestedDir, entry))
}
