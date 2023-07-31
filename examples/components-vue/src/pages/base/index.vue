<script setup lang="ts">
import { UIButton as Button, UILink as Link } from '@sy-js/components-vue'
</script>

<template>
  <div class="container">
    <Button disabled>button</Button>
    <Link>link</Link>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
</style>
