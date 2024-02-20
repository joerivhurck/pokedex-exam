<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const pokemon = [
  { name: 'charmander' },
  { name: 'bulabsaur' },
  { name: 'pikachu' },
  { name: 'mew' },
  { name: 'mewtwo' },
  { name: 'Mr. Nice' }
]
</script>

<template>
  <div
    v-for="(pokemons, index) in pokemon"
    :key="index"
    @click="
      router.push({
        name: 'pokemonDetails',
        params: { name: pokemons.name }
      })
    "
  >
    {{ pokemons.name }}
  </div>
</template>
