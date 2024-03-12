<script setup lang="ts">
import { useFavorites } from '@/services/favorite.service'
import { onMounted} from 'vue'

const { getFavorites, favorites } = useFavorites()

onMounted(() => {
  getFavorites()
})
</script>

<template>
  <div class="m-2" v-for="favorite in favorites" :key="favorite">{{ favorite }}</div>
</template>
