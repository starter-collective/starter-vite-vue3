<script setup lang="ts">
const { t } = useI18n()

const { toggleLocale } = useLocale()

const route = useRoute()

const router = useRouter()

const { headerLogo } = storeToRefs(useLayoutStore())

function goPage(path: string) {
  router.push(path)
}

function openGithub() {
  window.open(GITHUB_URL)
}
</script>

<template>
  <main w-full h-full>
    <header py-10 px-4 text-center>
      <img v-if="headerLogo" alt="Logo Image" src="/logo.png" w-20 m-auto>
      <p text-6 font-bold my-5>
        <span mr-2 font-800>{{ t('app.title') }}</span>
        <sup><i>v{{ APP_VERSION }}</i></sup>
      </p>
      <p flex flex-wrap gap-2 justify-center>
        <TheButton v-if="route.path === '/about'" @click="goPage('/')">
          {{ t('button.index-page') }}
        </TheButton>
        <TheButton v-else @click="goPage('/about')">
          {{ t('button.about-page') }}
        </TheButton>
        <TheButton @click="goPage('/404')">
          {{ t('button.404-page') }}
        </TheButton>
        <TheButton @click="toggleLocale()">
          <i i-carbon-ibm-watson-language-translator />
        </TheButton>
        <TheButton @click="toggleDark()">
          <i i="carbon-sun dark:carbon-moon" />
        </TheButton>
        <TheButton @click="openGithub()">
          <i i="carbon-logo-github" />
        </TheButton>
      </p>
    </header>
    <main m-auto min-h-32 max-w-full px-4 sm:max-w-2xl>
      <RouterView />
    </main>
    <footer py-10 px-4 text-center>
      <a :href="LICENSE_URL" target="_blank">MIT License</a> © {{ new Date().getFullYear() }} <a
        href="https://github.com/kieranwv" target="_blank"
      >Kieran Wang</a>
    </footer>
  </main>
</template>
