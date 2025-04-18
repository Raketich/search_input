import { defineStore } from 'pinia'

export const useNamesStore = defineStore('names', {
  state: () => ({
    namesList: [
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
    ],
  }),
  getters: {
    getFilteredNames: (state) => (searchTerm: string) => {
      if (!searchTerm.trim()) return []

      const term = searchTerm.toLowerCase()
      return state.namesList.filter((name) => name.toLowerCase().startsWith(term))
    },
  },
})
