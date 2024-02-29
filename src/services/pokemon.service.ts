import type { PokemonInfo, ApiResponse } from '@/components/models'


import axios from 'axios'

const usePokemon = () => {
  const getAllpokemonByNames = (): Promise<Array<PokemonInfo>> => {
    return axios
      .get<ApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((apiResponse) => {
        console.log(apiResponse.data.results)
        return apiResponse.data.results
      })
  }
  return { getAllpokemonByNames }
}

export { usePokemon }
