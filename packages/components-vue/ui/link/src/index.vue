<script lang="ts" setup>
import { compPrefix } from '../../config'
import type { LinkProps, LinkEmits } from './index'

defineOptions({ name: `${compPrefix}Link` })
const props = withDefaults(defineProps<LinkProps>(), { disabled: false })
const emit = defineEmits<LinkEmits>()

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<template>
  <a
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <slot v-if="$slots.icon" name="icon"></slot>
  </a>
</template>
