import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const routerSource = readFileSync(
  resolve(import.meta.dirname, '..', 'src', 'router.js'),
  'utf-8'
)

describe('router history mode', () => {
  it('imports createWebHashHistory, not createWebHistory', () => {
    expect(routerSource).toContain('createWebHashHistory')
    expect(routerSource).not.toMatch(/\bcreateWebHistory\b/)
  })

  it('uses createWebHashHistory in router creation', () => {
    expect(routerSource).toMatch(/history:\s*createWebHashHistory\(/)
  })
})
