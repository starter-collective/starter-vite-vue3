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
  <div mb-6 border-1 rd-1 border-color p-6>
    <TheButton mx-auto @click="toggleLogo">
      {{ headerLogo ? t('button.hide-logo') : t('button.show-logo') }}
    </TheButton>
    <p op-75 my-5 text-center>
      {{ t('button.toggle-logo-description') }}
    </p>
  </div>
  <div border-1 rd-1 border-color p-6>
    <TheButton mx-auto :loading @click="fetchData">
      {{ t('button.request') }}
    </TheButton>
    <ul v-if="todoList && todoList.length > 0" my-5 h-30 overflow-y-auto>
      <li v-for="item in todoList" :key="item.id" text-base lh-normal>
        <input type="checkbox" accent-primary>
        {{ item.title }}
      </li>
    </ul>
    <p v-if="todoList.length === 0" text-center my-5 op-75>
      {{ emptyText || t('empty') }}
    </p>
  </div>
</template>
