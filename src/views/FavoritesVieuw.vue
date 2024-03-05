<script setup lang="ts">
import { useFavorites } from '@/services/favorite.service'
import { onMounted } from 'vue'

const { addFavorites, favorites } = useFavorites()

onMounted(() => {
    addFavorites()
})
</script>

<template>
  <div v-for="favorite in favorites" :key="favorite">{{ favorite }}</div>
</template>
