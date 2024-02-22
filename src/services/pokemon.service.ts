import type { PokemonInfo } from '@/components/models'
import { ref, type Ref } from 'vue'

import axios from 'axios'

const pokemons: Ref<Array<PokemonInfo>> = ref([])

const usePokemon = () => {
  const getAllpokemonByNames = () => {
    axios
      .get<Array<PokemonInfo>>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((ApiResponse) => {
        const pokemonNames = ApiResponse.data.results.map((pokemonInfo) => {
          return pokemonInfo.name
        })
        return axios.all(
          pokemonNames.map((name) => axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`))
        )
      })
      .then((pokemonResponses) => {
        pokemons.value = pokemonResponses.map((response) => {
          const pokemonInfo = response.data
          const pokemon: Pokemon = {
            name: pokemonInfo.name,
            id: pokemonInfo.id
          }
          
          return pokemon
        })
      })
  }
  return { getAllpokemonByNames, pokemons }
}

export { usePokemon }
