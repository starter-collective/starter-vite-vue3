<route lang="json">
{
  "name": "dynamic",
  "meta": {
    "layout": "page"
  }
}
</route>

<script lang="ts" setup>
import type { RouteLocationNormalizedLoaded } from 'vue-router/auto'

const { t } = useI18n()

const { back } = useBack()

const router = useRouter()

const route = useRoute() as RouteLocationNormalizedLoaded<'dynamic'>

const title = computed(() => {
  return route.params.id
})

useHead({
  title,
})

const params = ref('')

function jump() {
  if (params.value) {
    router.push({
      path: `/dynamic/${route.params.id}/${params.value}`,
    })
  }
}
</script>

<template>
  <TheCard my-5>
    <h2 text-center text-lg font-bold mb-5>
      Hi, {{ route.params.id }}
    </h2>
    <p>
      {{ t('page.dynamic.description') }}
      <a target="_blank" href="https://uvr.esm.is/guide/file-based-routing.html#dynamic-routes">
        https://uvr.esm.is/guide/file-based-routing.html#dynamic-routes
      </a>
    </p>
    <TheButton mx-auto mt-4 @click="back()">
      <i i-carbon-return mr-2 />
      <span> {{ t('button.back') }}</span>
    </TheButton>
  </TheCard>
  <TheCard my-5>
    <h2 text-center text-lg font-bold mb-5>
      {{ t('page.dynamic.multiple-route-params') }}
    </h2>
    <p>
      <TheInput v-model="params" />
    </p>
    <TheButton mx-auto mt-4 @click="jump()">
      <span> {{ t('button.jump') }}</span>
    </TheButton>
  </TheCard>
</template>
