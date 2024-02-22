<script setup lang="ts">
import { useRouter } from 'vue-router'
import { usePokemon } from '@/services/pokemon.service'
import Listbox from 'primevue/listbox'
import { ref } from 'vue'

const { pokemons } = usePokemon()
const router = useRouter()

const selectedPokemon = ref(null)

const pokemonOptions = pokemons.value.map((pokemon) => ({ name: pokemon.name }))

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
      :options="pokemonOptions"
      option-label="name"
      option-value="name"
      @click="navigateToPokemonDetails"
    />
  </div>
</template>
