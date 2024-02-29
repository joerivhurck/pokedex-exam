<script setup lang="ts">
import { RouterView , useRouter} from 'vue-router'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'

const router = useRouter()

const navigateHome = ()=>{
  router.push('/')
}
</script>

<template>
  <Toolbar>
    <template #start><div class="text-2xl">Pokédex</div></template>
    <template #end>
      <Button @click="navigateHome" label="Home" />
    </template>
  </Toolbar>

  <!--hier worden de children getoond-->
  <RouterView />
</template>
