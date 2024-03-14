<script setup lang="ts">
import { useFavorites } from '@/services/favorite.service'
import { onMounted, ref } from 'vue'
import 'primeicons/primeicons.css'
import Listbox from 'primevue/listbox'

const { getFavorites, favorites, deleteFavorites } = useFavorites()

const selectedFavorite = ref('')

onMounted(() => {
  getFavorites()
})
</script>

<template>
  <div class="m-3 flex justify-start">
    <Listbox v-model="selectedFavorite" :options="favorites">
      <template #option="slotProps">
        <div class="flex align-items-center">
          <i
            class="mr-4 pi pi-trash text-red-500 cursor-pointer"
            @click="deleteFavorites(selectedFavorite)"
          ></i>
          <div>{{ slotProps.option }}</div>
        </div>
      </template>
    </Listbox>
  </div>
</template>
