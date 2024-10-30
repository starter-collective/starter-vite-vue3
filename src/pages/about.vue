<route lang="json">
{
  "name": "About",
  "meta": {
    "title": "About Page",
    "locale": "page.about.title",
    "layout": "page"
  }
}
</route>

<script lang="ts" setup>
const route = useRoute()

const { t } = useI18n()
</script>

<template>
  <h1 text-center text-lg font-bold mb-5>
    {{ route.meta.title }}
  </h1>
  <div flex justify-center items-center my-5>
    {{ t('app.description') }}
  </div>
</template>
