<route lang="json">
{
  "name": "dynamic",
  "meta": {
    "layout": "page"
  }
}
</route>

<script lang="ts" setup>
const route = useRoute()

const title = computed(() => {
  return route.params.id
})

useHead({
  title,
})
</script>

<template>
  <TheCard>
    <h2 text-center text-lg font-bold mb-5>
      Hi, {{ route.params.id }}
    </h2>
    <p>
      Read more about dynamic routing in the
      <a target="_blank" href="https://uvr.esm.is/guide/file-based-routing.html#dynamic-routes">
        https://uvr.esm.is/guide/file-based-routing.html#dynamic-routes
      </a>
    </p>
  </TheCard>
</template>
