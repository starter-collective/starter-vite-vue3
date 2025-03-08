<route lang="json">
  {
    "name": "dynamic-params",
    "meta": {
      "layout": "page"
    }
  }
  </route>

<script lang="ts" setup>
import type { RouteLocationNormalizedLoaded } from 'vue-router/auto'

const { t } = useI18n()

const { back } = useBack()

const route = useRoute() as RouteLocationNormalizedLoaded<'dynamic-params'>

const title = computed(() => {
  return route.params.params
})

useHead({
  title,
})
</script>

<template>
  <TheCard>
    <h2 text-center text-lg font-bold mb-5>
      Params: {{ route.params }}
    </h2>
    <TheButton mx-auto mt-4 @click="back()">
      <i i-carbon-return mr-2 />
      <span> {{ t('button.back') }}</span>
    </TheButton>
  </TheCard>
</template>
