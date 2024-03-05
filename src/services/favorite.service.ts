import { ref } from 'vue'

import { usePokemon } from '@/services/pokemon.service'

const { getPokemonByName } = usePokemon()

import { useRoute } from 'vue-router'

const route = useRoute()



const favorites = ref<string[]>([])


const useFavorites = () => {
  const addFavorites = () => {
    console.log(route.params.name)
    favorites.value.push('pika')
}
  return { addFavorites,favorites }
}

export { useFavorites }
