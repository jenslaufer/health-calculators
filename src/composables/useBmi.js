export function calcBmi(weight, height, unit) {
  if (!weight || !height) return null
  if (unit === 'metric') {
    const m = height / 100
    return weight / (m * m)
  }
  return (weight * 703) / (height * height)
}

export function getBmiCategory(bmi) {
  if (bmi === null || bmi === undefined) return null
  if (bmi < 18.5) return { label: 'bmi.underweight', color: 'text-blue-500', bg: 'bg-blue-500' }
  if (bmi < 25) return { label: 'bmi.normal', color: 'text-green-600', bg: 'bg-green-600' }
  if (bmi < 30) return { label: 'bmi.overweight', color: 'text-yellow-500', bg: 'bg-yellow-500' }
  return { label: 'bmi.obese', color: 'text-red-500', bg: 'bg-red-500' }
}

export function getBmiBarPosition(bmi) {
  if (!bmi) return 0
  const clamped = Math.min(Math.max(bmi, 10), 40)
  return ((clamped - 10) / 30) * 100
}
