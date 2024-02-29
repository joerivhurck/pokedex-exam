import type { PokemonInfo, ApiResponse, Pokemon } from '@/components/models'

import axios from 'axios'

const usePokemon = () => {
  const getAllpokemon = (): Promise<Array<PokemonInfo>> => {
    return axios
      .get<ApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((apiResponse) => {
        console.log(apiResponse)
        return apiResponse.data.results
      })
  }
  const getPokemonByName = (name:string): Promise<Pokemon> => {
    return axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`).then((apiResponse) => {
      return apiResponse.data
    })
  }
  return { getAllpokemon, getPokemonByName }
}

export { usePokemon }
