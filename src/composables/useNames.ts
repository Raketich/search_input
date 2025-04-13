import { ref, computed } from 'vue'

export function useNames() {
  const namesList = ref([
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Emma',
    'Frank',
    'Grace',
    'Henry',
    'Isabella',
    'Jack',
    'Kate',
    'Liam',
    'Mia',
    'Noah',
    'Olivia',
    'Peter',
    'Quinn',
    'Ryan',
    'Sophia',
    'Thomas',
    'Алина',
    'Борис',
    'Виктор',
    'Галина',
    'Дмитрий',
    'Елена',
    'Жанна',
    'Иван',
    'Ксения',
    'Максим',
    'Alexander',
    'Benjamin',
    'Christopher',
    'Daniel',
    'Elizabeth',
    'Fiona',
    'George',
    'Hannah',
    'Isaac',
    'Julia',
    'Kevin',
    'Laura',
    'Michael',
    'Natalie',
    'Oscar',
    'Patricia',
    'Quentin',
    'Rebecca',
    'Samuel',
    'Tiffany',
  ])

  const getFilteredNames = computed(() => (searchTerm: string) => {
    if (!searchTerm.trim()) return []

    const term = searchTerm.toLowerCase()
    return namesList.value.filter((name) => name.toLowerCase().startsWith(term))
  })

  return {
    namesList,
    getFilteredNames,
  }
}
