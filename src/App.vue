<script lang="ts" setup>
const { t } = useI18n()

const title = computed(() => {
  return t('app.title')
})

useHead({
  titleTemplate: (_t) => {
    return _t && _t !== title.value ? `${_t} - ${title.value}` : title.value
  },
})
</script>

<template>
  <RouterView />
</template>
