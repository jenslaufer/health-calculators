import { describe, it, expect } from 'vitest'
import {
  classifyTsh,
  classifyT3,
  classifyT4,
  classifyThyroidFunction,
  convertTsh,
  convertT4,
  convertT3,
} from '../utils/thyroidFunction.js'

// Thyroid panel interpretation — TSH (mIU/L), free T4 (ng/dL), free T3 (pg/mL).
// Reference ranges from American Thyroid Association (ATA) adult guidelines.

describe('TSH classification', () => {
  it('classifies < 0.4 mIU/L as low (hyperthyroid pattern)', () => {
    expect(classifyTsh(0.2)).toBe('low')
    expect(classifyTsh(0.39)).toBe('low')
  })

  it('classifies 0.4–4.0 mIU/L as normal', () => {
    expect(classifyTsh(0.4)).toBe('normal')
    expect(classifyTsh(2.5)).toBe('normal')
    expect(classifyTsh(4.0)).toBe('normal')
  })

  it('classifies > 4.0 mIU/L as high (hypothyroid pattern)', () => {
    expect(classifyTsh(4.1)).toBe('high')
    expect(classifyTsh(10)).toBe('high')
  })

  it('returns null for invalid input', () => {
    expect(classifyTsh(null)).toBeNull()
    expect(classifyTsh(NaN)).toBeNull()
    expect(classifyTsh(-1)).toBeNull()
  })
})

describe('Free T4 classification (ng/dL)', () => {
  it('classifies < 0.8 ng/dL as low', () => {
    expect(classifyT4(0.5)).toBe('low')
  })

  it('classifies 0.8–1.8 ng/dL as normal', () => {
    expect(classifyT4(0.8)).toBe('normal')
    expect(classifyT4(1.2)).toBe('normal')
    expect(classifyT4(1.8)).toBe('normal')
  })

  it('classifies > 1.8 ng/dL as high', () => {
    expect(classifyT4(2.5)).toBe('high')
  })

  it('returns null for invalid input', () => {
    expect(classifyT4(null)).toBeNull()
    expect(classifyT4(-1)).toBeNull()
  })
})

describe('Free T3 classification (pg/mL)', () => {
  it('classifies < 2.3 pg/mL as low', () => {
    expect(classifyT3(1.8)).toBe('low')
  })

  it('classifies 2.3–4.2 pg/mL as normal', () => {
    expect(classifyT3(2.3)).toBe('normal')
    expect(classifyT3(3.2)).toBe('normal')
    expect(classifyT3(4.2)).toBe('normal')
  })

  it('classifies > 4.2 pg/mL as high', () => {
    expect(classifyT3(5)).toBe('high')
  })

  it('returns null for invalid input', () => {
    expect(classifyT3(null)).toBeNull()
  })
})

describe('Unit conversions', () => {
  it('TSH is unitless between mIU/L and µIU/mL (1:1)', () => {
    expect(convertTsh(2.5, 'mIU/L', 'µIU/mL')).toBeCloseTo(2.5)
    expect(convertTsh(2.5, 'µIU/mL', 'mIU/L')).toBeCloseTo(2.5)
  })

  it('Free T4 ng/dL → pmol/L (×12.87)', () => {
    expect(convertT4(1.0, 'ng/dL', 'pmol/L')).toBeCloseTo(12.87, 1)
    expect(convertT4(1.5, 'ng/dL', 'pmol/L')).toBeCloseTo(19.31, 1)
  })

  it('Free T4 pmol/L → ng/dL (÷12.87)', () => {
    expect(convertT4(12.87, 'pmol/L', 'ng/dL')).toBeCloseTo(1.0, 1)
  })

  it('Free T3 pg/mL → pmol/L (×1.536)', () => {
    expect(convertT3(3.0, 'pg/mL', 'pmol/L')).toBeCloseTo(4.61, 1)
  })

  it('Free T3 pmol/L → pg/mL (÷1.536)', () => {
    expect(convertT3(4.61, 'pmol/L', 'pg/mL')).toBeCloseTo(3.0, 1)
  })
})

describe('Overall thyroid function classification', () => {
  it('all normal → euthyroid', () => {
    const r = classifyThyroidFunction({ tsh: 2.0, freeT4: 1.2, freeT3: 3.0 })
    expect(r.status).toBe('euthyroid')
  })

  it('high TSH + low free T4 → primary hypothyroidism', () => {
    const r = classifyThyroidFunction({ tsh: 8.0, freeT4: 0.6, freeT3: 2.0 })
    expect(r.status).toBe('primaryHypo')
  })

  it('high TSH + normal free T4 → subclinical hypothyroidism', () => {
    const r = classifyThyroidFunction({ tsh: 6.0, freeT4: 1.2, freeT3: 3.0 })
    expect(r.status).toBe('subclinicalHypo')
  })

  it('low TSH + high free T4 → primary hyperthyroidism', () => {
    const r = classifyThyroidFunction({ tsh: 0.1, freeT4: 2.5, freeT3: 5.0 })
    expect(r.status).toBe('primaryHyper')
  })

  it('low TSH + normal free T4 + normal free T3 → subclinical hyperthyroidism', () => {
    const r = classifyThyroidFunction({ tsh: 0.2, freeT4: 1.2, freeT3: 3.0 })
    expect(r.status).toBe('subclinicalHyper')
  })

  it('only TSH provided + TSH high → can still classify', () => {
    const r = classifyThyroidFunction({ tsh: 8.0 })
    expect(r.status).toBe('elevatedTsh')
  })

  it('returns null when no values provided', () => {
    expect(classifyThyroidFunction({})).toBeNull()
    expect(classifyThyroidFunction(null)).toBeNull()
  })

  it('returned object includes per-marker categories', () => {
    const r = classifyThyroidFunction({ tsh: 8.0, freeT4: 0.6 })
    expect(r.tshCategory).toBe('high')
    expect(r.t4Category).toBe('low')
  })
})
