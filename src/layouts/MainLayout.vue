<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
</script>

<template>
  <Toolbar>
    <template #start><div class="text-2xl">Pokédex</div></template>
    <template #end>
      <Button label="Home" />
    </template>
  </Toolbar>

  <!--hier worden de children getoond-->
  <RouterView />
</template>
