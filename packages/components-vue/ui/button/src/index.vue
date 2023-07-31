<script lang="ts" setup>
import { ref } from 'vue'
import { compPrefix } from '../../config'
import type { ButtonProps, ButtonEmits } from './index'

defineOptions({ name: `${compPrefix}Button` })

const props = defineProps<ButtonProps>()
const emit = defineEmits<ButtonEmits>()

const _ref = ref<HTMLButtonElement>()

defineExpose({
  /** @description button html element */
  ref: _ref,
})

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<template>
  <button
    ref="_ref"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
