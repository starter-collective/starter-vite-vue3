<route lang="json">
{
  "name": "about",
  "meta": {
    "layout": "page"
  }
}
</route>

<script lang="ts" setup>
const { t } = useI18n()

const { back } = useBack()

const title = computed(() => {
  return t('page.about.title')
})

useHead({
  title,
})
</script>

<template>
  <TheCard>
    <h2 text-center text-lg font-bold mb-5>
      {{ t('page.about.title') }}
    </h2>
    <p>
      {{ t('app.description') }}
    </p>
    <TheButton mx-auto mt-4 @click="back()">
      <i i-carbon-return mr-2 />
      <span> {{ t('button.back') }}</span>
    </TheButton>
  </TheCard>
</template>
