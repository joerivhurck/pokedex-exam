<script setup lang="ts">
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import type { Type } from '@/components/models'
import { usePokemon } from '@/services/pokemon.service'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import Button from 'primevue/button'
import 'primeicons/primeicons.css'
import { useFavorites } from '@/services/favorite.service'
const { addFavorites, deleteFavorites } = useFavorites()

const { getPokemonByName } = usePokemon()

const route = useRoute()

const pokemonId = ref<number>()
const pokemonHeight = ref<number>()
const pokemonWeight = ref<number>()
const pokemonName = ref<string>('')
const pokemonSprite = ref<string>()
const pokemonType = ref<Array<Type>>([])
const typeNameSlot1 = ref<string>()

onMounted(async () => {
  await getPokemonByName(route.params.name.toString()) // Pass the name of the Pokemon you want to retrieve
    .then((apiResponse) => {
      pokemonId.value = apiResponse.id // Assuming pokemonId is a ref or reactive variable
      pokemonHeight.value = apiResponse.height
      pokemonWeight.value = apiResponse.weight
      pokemonName.value = apiResponse.name
      pokemonSprite.value =
        apiResponse.sprites.versions['generation-v']['black-white'].animated.front_default
      pokemonType.value = apiResponse.types
      typeNameSlot1.value = pokemonType.value.find((type: Type) => type.slot === 1)?.type?.name
    })
    .catch((error) => {
      console.error('error fetching pokemonbyname', error)
    })
})
</script>

<template>
  <div class="flex items-center justify-center w-full mt-16">
    <Card class="flex-col border-2 border-shadow" style="width: 17em">
      <template #header>
        <div class="w-full h-44 flex flex-col items-center">
          <img class="h-36 w-36 m-4" :src="pokemonSprite" alt="" />
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
        <div class="h-24 flex flex-col">
          <Chip class="flex justify-center w-16" :label="typeNameSlot1" />
          <Button
            class="flex justify-start mt-6 w-32 h-10"
            label="Toevoegen"
            icon="pi pi-heart-fill"
            iconPos="right"
            @click="addFavorites(pokemonName)"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped></style>
