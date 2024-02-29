<script setup lang="ts">
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import { usePokemon } from '@/services/pokemon.service'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const { getPokemonByName } = usePokemon()

const route = useRoute()

const pokemonId = ref<number>()
const pokemonHeight = ref<number>()
const pokemonWeight = ref<number>()
const pokemonName = ref<string>()
const pokemonSprite = ref<string>()

onMounted(async () => {
  await getPokemonByName(route.params.name.toString()) // Pass the name of the Pokemon you want to retrieve
    .then((apiResponse) => {
      pokemonId.value = apiResponse.id // Assuming pokemonId is a ref or reactive variable
      pokemonHeight.value = apiResponse.height
      pokemonWeight.value = apiResponse.weight
      pokemonName.value = apiResponse.name
      pokemonSprite.value =
        apiResponse.sprites.versions['generation-v']['black-white'].animated.front_default
    })
})
</script>

<template>
  <div class="flex items-center justify-center w-full">
    <Card class="flex-col justify-between border-4 border-black" style="width: 15em">
      <template #header>
        <div class="w-full h-24 flex flex-col items-center">
          <img class="h-24 w-24 m-2" :src="pokemonSprite" alt="" />
        </div>
      </template>
      <template #title> {{ pokemonName }}</template>
      <template #subtitle> {{ pokemonId }} </template>
      <template #content>
        <div class="m-0">
          <div>height: {{ pokemonHeight }}</div>
          <div>weight: {{ pokemonWeight }}</div>
        </div>
      </template>
      <template #footer>
        <Chip></Chip>
      </template>
    </Card>
  </div>
</template>

<style scoped></style>
