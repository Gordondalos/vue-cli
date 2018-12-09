export default {
  data() {
    return {
      persons: [
        { name: 'Вася' },
        { name: 'Таня' },
        { name: 'Коля' },
      ],
      filterText: '',
    }
  },
  computed: {
    filteredNames(): Array<{name: string}> {
      return this.persons.filter( ( person: {name: string} ) => {
        return person.name.toLowerCase().indexOf( this.filterText.toLowerCase() ) !== -1
      } )
    }
  },
}