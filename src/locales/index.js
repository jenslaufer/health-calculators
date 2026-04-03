// Merges base locale files with per-calculator locale files discovered via Vite glob imports.

import baseDe from './de.json'
import baseEn from './en.json'

const calcDeModules = import.meta.glob('./calculators/de/*.json', { eager: true })
const calcEnModules = import.meta.glob('./calculators/en/*.json', { eager: true })

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {}
      deepMerge(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
  return target
}

function mergeAll(base, modules) {
  const result = JSON.parse(JSON.stringify(base))
  for (const mod of Object.values(modules)) {
    deepMerge(result, mod.default)
  }
  return result
}

export const de = mergeAll(baseDe, calcDeModules)
export const en = mergeAll(baseEn, calcEnModules)
