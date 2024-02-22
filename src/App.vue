<script setup lang="ts">
import { RouterView } from 'vue-router'
import { usePokemon } from './services/pokemon.service'
import { onMounted } from 'vue';
const { getAllpokemonByNames } = usePokemon()

onMounted(() => {
   getAllpokemonByNames()
})

</script>

<template>
  <RouterView />
</template>
