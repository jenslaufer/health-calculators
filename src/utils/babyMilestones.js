// Baby Milestones — expected developmental milestones by age.
//
// Based on the CDC's "Learn the Signs. Act Early." milestone framework
// (revised 2022) and AAP/Bright Futures developmental surveillance.
//
// Eight age checkpoints between 0 and 24 months:
//   2, 4, 6, 9, 12, 15, 18, 24 months.
//
// For any age (in months) the calculator returns:
//   - the closest applicable checkpoint
//   - the four developmental domains: motor, language, social, cognitive
//     (each is an array of milestone keys for i18n lookup)
//   - red-flag (warning) keys for that age
//
// Uses i18n keys, not embedded strings — keeps logic and locale separate.

export const BRACKETS = [2, 4, 6, 9, 12, 15, 18, 24]

const MILESTONES = {
  2: {
    motor: ['liftHeadProne', 'movesArmsLegs'],
    language: ['cooing', 'reactsToSound'],
    social: ['smilesAtPeople', 'looksAtFaces'],
    cognitive: ['watchesFaces', 'followsObject'],
    warnings: ['noResponseLoudSounds', 'noEyeFocus'],
  },
  4: {
    motor: ['holdsHeadSteady', 'pushesUpProne', 'grasps'],
    language: ['babbles', 'laughs'],
    social: ['smilesSpontaneously', 'mimicsExpressions'],
    cognitive: ['reachesForToys', 'showsBoredom'],
    warnings: ['noSmile', 'noBabbling', 'doesNotPushUp'],
  },
  6: {
    motor: ['rollsBothWays', 'beginsSitSupported', 'transfersObjects'],
    language: ['respondsToName', 'stringsVowels'],
    social: ['knowsFamiliarFaces', 'enjoysPlaying'],
    cognitive: ['exploresMouth', 'curiosityForObjects'],
    warnings: ['noAffectionForCaregivers', 'doesNotReachForObjects', 'cannotSitWithHelp'],
  },
  9: {
    motor: ['standsHolding', 'sitsWithoutSupport', 'pincerForming'],
    language: ['mamaDadaNonSpecific', 'understandsNo'],
    social: ['mayBeAfraidStrangers', 'hasFavoriteToys'],
    cognitive: ['watchesFallingObject', 'looksForHidden'],
    warnings: ['doesNotBearWeight', 'doesNotBabble', 'noResponseToName'],
  },
  12: {
    motor: ['pullsToStand', 'cruisesFurniture', 'mayTakeSteps'],
    language: ['saysMamaDada', 'simpleGestures'],
    social: ['playsPeekaboo', 'hasFavoritePeople'],
    cognitive: ['banksObjects', 'findsHiddenObjects'],
    warnings: ['doesNotCrawl', 'doesNotPointAtThings', 'losesSkills'],
  },
  15: {
    motor: ['walksFew', 'scribbles', 'stoopsToPickup'],
    language: ['saysSeveralWords', 'followsSimpleCommand'],
    social: ['copiesOthers', 'showsAffection'],
    cognitive: ['stacksTwoBlocks', 'pointsToShow'],
    warnings: ['doesNotPoint', 'cannotWalk', 'noEyeContact'],
  },
  18: {
    motor: ['walksAlone', 'climbsFurniture', 'usesSpoonCup'],
    language: ['says10Words', 'saysNo'],
    social: ['handsObjects', 'temperTantrums'],
    cognitive: ['knowsCommonObjects', 'pretendPlayBasic'],
    warnings: ['doesNotPointToShow', 'doesNotGain3Words', 'doesNotNoticeCaregivers'],
  },
  24: {
    motor: ['runsSteadily', 'kicksBall', 'walksUpStairs'],
    language: ['twoWordPhrases', 'pointsToBodyParts'],
    social: ['parallelPlay', 'increasingIndependence'],
    cognitive: ['sortsByShape', 'completesSentencesInBooks'],
    warnings: ['doesNotUse2WordPhrases', 'cannotWalkSteadily', 'losesSkills'],
  },
}

export function isValidAgeMonths(ageMonths) {
  return typeof ageMonths === 'number'
    && Number.isFinite(ageMonths)
    && ageMonths >= 0
    && ageMonths <= 36
}

export function findBracket(ageMonths) {
  if (!isValidAgeMonths(ageMonths)) return null
  // Pick the highest bracket that is <= ageMonths; if ageMonths < 2, use 2.
  let bracket = BRACKETS[0]
  for (const b of BRACKETS) {
    if (ageMonths >= b) bracket = b
  }
  return bracket
}

export function ageFromBirthDate(birthDateStr, asOfStr) {
  if (!birthDateStr) return null
  const birth = new Date(birthDateStr)
  const asOf = asOfStr ? new Date(asOfStr) : new Date()
  if (Number.isNaN(birth.getTime()) || Number.isNaN(asOf.getTime())) return null
  if (asOf < birth) return null
  const diffMs = asOf - birth
  const days = diffMs / (1000 * 60 * 60 * 24)
  return days / 30.4375
}

export function getMilestones(ageMonths) {
  const bracket = findBracket(ageMonths)
  if (bracket === null) return null
  const m = MILESTONES[bracket]
  return {
    ageMonths,
    bracket,
    motor: [...m.motor],
    language: [...m.language],
    social: [...m.social],
    cognitive: [...m.cognitive],
    warnings: [...m.warnings],
  }
}

// WHO 2006 median weight (kg) and length (cm) per month, both sexes pooled
// (rounded average of WHO boys/girls medians) — for parent-friendly reference.
const REFERENCE_SIZE = {
  0:  { weightKg: 3.3, lengthCm: 49.5 },
  1:  { weightKg: 4.4, lengthCm: 54.0 },
  2:  { weightKg: 5.4, lengthCm: 57.5 },
  3:  { weightKg: 6.1, lengthCm: 60.0 },
  4:  { weightKg: 6.7, lengthCm: 62.0 },
  5:  { weightKg: 7.2, lengthCm: 64.0 },
  6:  { weightKg: 7.6, lengthCm: 65.5 },
  7:  { weightKg: 8.0, lengthCm: 67.0 },
  8:  { weightKg: 8.3, lengthCm: 68.5 },
  9:  { weightKg: 8.6, lengthCm: 70.0 },
  10: { weightKg: 8.9, lengthCm: 71.5 },
  11: { weightKg: 9.2, lengthCm: 72.5 },
  12: { weightKg: 9.5, lengthCm: 74.0 },
  15: { weightKg: 10.3, lengthCm: 77.5 },
  18: { weightKg: 11.0, lengthCm: 81.0 },
  24: { weightKg: 12.2, lengthCm: 87.5 },
}

export function getExpectedSize(ageMonths) {
  if (!isValidAgeMonths(ageMonths)) return null
  // Find nearest entry by absolute difference.
  const ages = Object.keys(REFERENCE_SIZE).map(Number)
  let nearest = ages[0]
  let bestDiff = Math.abs(nearest - ageMonths)
  for (const a of ages) {
    const d = Math.abs(a - ageMonths)
    if (d < bestDiff) {
      nearest = a
      bestDiff = d
    }
  }
  return { ...REFERENCE_SIZE[nearest], referenceAgeMonths: nearest }
}
