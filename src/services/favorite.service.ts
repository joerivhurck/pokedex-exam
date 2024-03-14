import { ref } from 'vue'

const favorites = ref()
const isFavorite = ref<boolean>()

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

  const deleteFavorites = (pokemon: string) => {
    favorites.value = favorites.value.filter((p: string) => p !== pokemon)
    saveFavorites(favorites.value)
  }

  const toggleFavorite = (name: string) => {
    if (!favorites.value) {
      favorites.value = []
    }
    if (!favorites.value.includes(name)) {
      addFavorites(name)
      isFavorite.value = true
    } else {
      deleteFavorites(name)
      isFavorite.value = false
    }
    console.log(isFavorite.value)
  }
  const checkFavorites = (name: string) => {
    if (favorites.value.includes(name)) {
      isFavorite.value = true
    } else {
      isFavorite.value = false
    }
  }
  const isFavoritePokemon = (name: string) => {
    return favorites.value.includes(name)
  }
  return {
    addFavorites,
    loadFavorites,
    getFavorites,
    favorites,
    deleteFavorites,
    toggleFavorite,
    isFavorite,
    checkFavorites,
    isFavoritePokemon
  }
}

export { useFavorites }
