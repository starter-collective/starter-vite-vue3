<route lang="json">
{
  "name": "not-found"
}
</route>

<script setup lang="ts">
const { t } = useI18n()

const title = computed(() => {
  return t('page.not-found.title')
})

useHead({
  title,
})

const router = useRouter()

function goBack() {
  if (history.length > 1)
    router.back()
  else
    router.replace('/')
}
</script>

<template>
  <div w-full h-full flex="~ items-center justify-center col">
    <img w-80 src="@/assets/not-found.svg" alt="404 Image">
    <h1 text-3xl mt-15 mb-5 font-bold>
      {{ t('page.not-found.title') }}
    </h1>
    <p mt-5 mb-15>
      {{ t('page.not-found.content') }}
    </p>
    <TheButton @click="goBack">
      <i i-carbon-return mr-2 />
      <span> {{ t('button.back') }}</span>
    </TheButton>
  </div>
</template>
