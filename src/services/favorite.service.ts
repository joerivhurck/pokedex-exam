import { ref } from 'vue'

const favorites = ref()

const useFavorites = () => {
  const addFavorites = (name: string) => {
    if (!favorites.value.includes(name)) {
      favorites.value.push(name)
      saveFavorites(favorites.value)
    }
  }
  const saveFavorites = (favorites: Array<string>) => {
    localStorage.setItem('pokemon', JSON.stringify(favorites))
  }

  const loadFavorites = () => {
    const savedPokemon = localStorage.getItem('pokemon')
    let favorites = []
    if (savedPokemon) {
      favorites = JSON.parse(savedPokemon)
    }

    return favorites
  }

  const getFavorites = () => {
    favorites.value = loadFavorites()
  }

 /* const deleteFavorites = (pokemon: string) => {
    favorites.value = favorites.value.filter((p: string) => p !== pokemon)
    saveFavorites(favorites.value)
  }*/
  
  return { addFavorites, loadFavorites, getFavorites, favorites }
}

export { useFavorites }
