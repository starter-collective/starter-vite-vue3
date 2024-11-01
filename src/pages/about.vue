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
const { t } = useI18n()
</script>

<template>
  <div border-1 rd-1 border-color p-6>
    <h1 text-center text-lg font-bold mb-5>
      {{ t('page.about.title') }}
    </h1>
    <p op-75 text-center>
      {{ t('app.description') }}
    </p>
  </div>
</template>
