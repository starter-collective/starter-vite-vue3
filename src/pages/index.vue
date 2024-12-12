<route lang="json">
{
  "name": "index",
  "meta": {
    "layout": "page"
  }
}
</route>

<script lang="ts" setup>
import type { TodoList } from '@/types/todo'

const router = useRouter()

const { t } = useI18n()

const title = computed(() => {
  return t('page.index.title')
})

useHead({
  title,
})

const { headerLogo } = storeToRefs(useLayoutStore())

const { toggleLogo } = useLayoutStore()

const todoList = ref<TodoList>([])

const emptyText = ref('')

const loading = ref(false)

function fetchData() {
  if (loading.value)
    return
  loading.value = true
  getTodoListApi().then((res) => {
    todoList.value = res.data
  }).catch((err) => {
    emptyText.value = err.message
  }).finally(() => {
    loading.value = false
  })
}

function goPage(path: string) {
  router.push(path)
}

function goDynamicRoute() {
  goPage(`/dynamic/${Math.random().toString().slice(2, 6)}`)
}
</script>

<template>
  <TheCard my-5>
    <div flex="~ items-center justify-center gap-2 wrap" mx-auto mb-5>
      <TheButton @click="goPage('/')">
        {{ t('button.index-page') }}
      </TheButton>
      <TheButton @click="goPage('/about')">
        {{ t('button.about-page') }}
      </TheButton>
      <TheButton @click="goPage('/404')">
        {{ t('button.404-page') }}
      </TheButton>
      <TheButton @click="goDynamicRoute">
        {{ t('button.dynamic-route') }}
      </TheButton>
    </div>
    <p>
      {{ t('button.dynamic-route-description') }}
    </p>
  </TheCard>
  <TheCard my-5>
    <TheButton mx-auto mb-5 @click="toggleLogo">
      {{ headerLogo ? t('button.hide-logo') : t('button.show-logo') }}
    </TheButton>
    <p flex="~ items-center justify-center gap-2">
      <i i-logos-pinia />
      <span>{{ t('button.toggle-logo-description') }}</span>
    </p>
  </TheCard>
  <TheCard my-5>
    <TheButton mx-auto mb-5 :loading @click="fetchData">
      {{ t('button.axios-request') }}
    </TheButton>
    <ul v-if="todoList && todoList.length > 0" w-full my-5 h-30 overflow-y-auto>
      <li v-for="item in todoList" :key="item.id">
        <input type="checkbox" accent-primary>
        {{ item.title }}
      </li>
    </ul>
    <p v-else>
      {{ emptyText || t('empty') }}
    </p>
  </TheCard>
</template>
