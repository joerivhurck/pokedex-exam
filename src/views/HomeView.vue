<script setup lang="ts">
import { useRouter } from 'vue-router'
import { usePokemon } from '@/services/pokemon.service'
import Listbox from 'primevue/listbox'
import { onMounted, ref, type Ref } from 'vue'

import type { PokemonInfo } from '@/components/models'

const { getAllpokemonByNames } = usePokemon()
const router = useRouter()

const selectedPokemon = ref(null)
const pokemons: Ref<Array<PokemonInfo>> = ref([])

onMounted(() => {
  getAllpokemonByNames()
    .then((apiResponse) => {
      pokemons.value = apiResponse.map((pokemon) => ({ name: pokemon.name, url: pokemon.url }))
      console.log(pokemons)
    })
    .catch((error) => {
      console.error('Error fetching Pokemon names:', error)
      // Handle error gracefully
    })
})

const navigateToPokemonDetails = () => {
  router.push({
    name: 'pokemonDetails',
    params: { name: selectedPokemon.value }
  })
}
</script>

<template>
  <div class="card flex justify-start mt-6 ml-6">
    <Listbox
      v-model="selectedPokemon"
      :options="pokemons"
      option-label="name"
      option-value="name"
      @click="navigateToPokemonDetails"
    />
  </div>
</template>
