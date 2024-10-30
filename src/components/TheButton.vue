<script lang="ts" setup>
defineProps<{
  loading?: boolean
}>()
</script>

<template>
  <button text-sm px-4 py-1 rd-1.5 inline-block bg-primary text-hex-f0f0f0 dark:text-hex-020617 cursor-pointer hover:op-75 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 border-none flex items-center py-2 v-bind="$attrs">
    <svg v-if="loading" mr-2 xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <g>
        <circle cx="12" cy="2.5" r="1.5" fill="currentColor" opacity=".14" />
        <circle cx="16.75" cy="3.77" r="1.5" fill="currentColor" opacity=".29" />
        <circle cx="20.23" cy="7.25" r="1.5" fill="currentColor" opacity=".43" />
        <circle cx="21.5" cy="12" r="1.5" fill="currentColor" opacity=".57" />
        <circle cx="20.23" cy="16.75" r="1.5" fill="currentColor" opacity=".71" />
        <circle cx="16.75" cy="20.23" r="1.5" fill="currentColor" opacity=".86" />
        <circle cx="12" cy="21.5" r="1.5" fill="currentColor" />
        <animateTransform
          attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate"
          values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
        />
      </g>
    </svg>

    <slot />
  </button>
</template>
