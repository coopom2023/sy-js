<script setup lang="ts">
import { routes } from '../../router/routes'
</script>

<template>
  <div>
    <h1>components-vue</h1>
    <ul>
      <li
        v-for="route in routes"
        :key="route.name"
      >
        <a
          target="_blank"
          rel="noreferrer"
          :href="route.path"
          v-if="!route.children"
        >
          {{ route.meta?.displayName }}
        </a>
        <span v-if="route.children">{{ route.meta?.displayName }}</span>
        <ul v-if="route.children">
          <li
            v-for="item in route.children"
            :key="item.name"
          >
            <a
              target="_blank"
              rel="noreferrer"
              :href="route.path + '/' + item.path"
              v-if="!item.children"
            >
              {{ item.meta?.displayName }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">

</style>
