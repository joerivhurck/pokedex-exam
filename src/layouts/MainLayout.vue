<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'

const router = useRouter()

defineProps<{
  Btn: String
}>()

const navigateHome = () => {
  router.push('/')
}

const navigateFav = () => {
  router.push("/favorites")
}
</script>

<template>
  <Toolbar>
    <template #start><div class="text-2xl">Pokédex</div></template>
    <template #end>
      <div class="flex justify-between w-52">
        <Button @click="navigateHome" label="Home" />
        <Button @click="navigateFav" label="Favorieten" />
      </div>
    </template>
  </Toolbar>

  <!--hier worden de children getoond-->
  <RouterView />
</template>
