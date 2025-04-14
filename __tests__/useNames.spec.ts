import { describe, it, expect } from 'vitest'
import { useNames } from '../src/composables/useNames'

describe('useNames', () => {
  it('returns namesList with predefined names', () => {
    const { namesList } = useNames()
    expect(namesList.value).toBeInstanceOf(Array)
    expect(namesList.value.length).toBeGreaterThan(0)
    expect(namesList.value).toContain('Alice')
    expect(namesList.value).toContain('Bob')
  })

  it('filters names that start with search term', () => {
    const { getFilteredNames } = useNames()
    const result = getFilteredNames.value('Al')

    expect(result).toContain('Alice')
    expect(result).toContain('Alexander')
    expect(result).not.toContain('Bob')
    expect(result).not.toContain('Charlie')
  })

  it('returns empty array when search term is empty', () => {
    const { getFilteredNames } = useNames()
    expect(getFilteredNames.value('')).toEqual([])
    expect(getFilteredNames.value('  ')).toEqual([])
  })

  it('is case insensitive when filtering', () => {
    const { getFilteredNames } = useNames()
    const lowerCaseResult = getFilteredNames.value('al')
    const upperCaseResult = getFilteredNames.value('AL')

    expect(lowerCaseResult).toEqual(upperCaseResult)
    expect(lowerCaseResult).toContain('Alice')
    expect(lowerCaseResult).toContain('Alexander')
  })

  it('returns no results for non-matching search term', () => {
    const { getFilteredNames } = useNames()
    const result = getFilteredNames.value('XYZ')

    expect(result).toEqual([])
  })
})
