<route lang="json">
{
  "name": "Index",
  "meta": {
    "title": "Index Page",
    "locale": "page.index.title",
    "layout": "page"
  }
}
</route>

<script lang="ts" setup>
import type { TodoList } from '@/apis/todo'

const { t } = useI18n()

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
</script>

<template>
  <TheCard my-5>
    <TheButton mx-auto mb-5 @click="toggleLogo">
      {{ headerLogo ? t('button.hide-logo') : t('button.show-logo') }}
    </TheButton>
    <p>
      {{ t('button.toggle-logo-description') }}
    </p>
  </TheCard>
  <TheCard my-5>
    <TheButton mx-auto mb-5 :loading @click="fetchData">
      {{ t('button.request') }}
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
