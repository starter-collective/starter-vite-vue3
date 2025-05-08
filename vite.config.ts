/// <reference types="vitest" />

import { resolve } from 'node:path'
import { cwd } from 'node:process'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import { unheadVueComposablesImports } from '@unhead/vue'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unoCSS from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports as vueRouterAutoImports } from 'unplugin-vue-router'
import vueRouter from 'unplugin-vue-router/vite'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression2'
import vueDevTools from 'vite-plugin-vue-devtools'
import layouts from 'vite-plugin-vue-layouts'

export default defineConfig(({ mode }) => {
  // Load env variables.
  const env = loadEnv(mode, cwd(), '')

  // Manual chunks.
  const chunks: string[] = ['axios', 'nprogress']

  return {
    base: env.VITE_BASE_PUBLIC_PATH,
    server: {
      host: true,
      port: 9865,
      // Proxy request and socket.
      // https://vitejs.dev/config/server-options.html#server-proxy
      proxy: {
        [env.VITE_REQUEST_BASE_URL]: {
          target: env.VITE_REQUEST_BASE_URL_PROXY,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(new RegExp(`^${env.VITE_REQUEST_BASE_URL}`), ''),
        },
      },
    },
    preview: {
      host: true,
      port: 9865,
    },
    resolve: {
      alias: {
        // Alias for path.
        // https://vitejs.dev/config/shared-options.html#resolve-alias
        '@': resolve(__dirname, 'src'),
      },
    },
    plugins: [
      // Vue & Jsx plugin.
      // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue
      // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx
      vue(),
      vueJsx(),

      // Vue layouts & pages plugin.
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      // https://github.com/posva/unplugin-vue-router
      layouts(),
      vueRouter({
        dts: 'typings/vue-router.d.ts',
      }),

      // UnoCSS plugin, you can see uno.config.ts.
      unoCSS(),

      // Auto import api.
      // https://github.com/unplugin/unplugin-auto-import
      autoImport({
        imports: [
          'vue',
          vueRouterAutoImports,
          unheadVueComposablesImports,
          {
            // add any other imports you were relying on
            'vue-router/auto': ['useLink'],
          },
          'vue-i18n',
          '@vueuse/core',
          'pinia',
        ],
        dts: 'typings/auto-imports.d.ts',
        dirs: [
          'src/apis/**/*',
          'src/composables/**/*',
          'src/constants/**/*',
          'src/stores/**/*',
          'src/utils/**/*',
        ],
        vueTemplate: true,
      }),

      // Auto registry components.
      // https://github.com/antfu/unplugin-vue-components
      components({
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'typings/components.d.ts',
      }),

      // Auto import i18n locales.
      // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
      vueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
        include: [resolve(__dirname, 'src/locales/**')],
      }),

      // Vue dev tools.
      // https://github.com/webfansplz/vite-plugin-vue-devtools
      env.VITE_DEV_TOOL === 'true' && vueDevTools(),

      // Vite compression plugin.
      // https://github.com/nonzzz/vite-plugin-compression
      env.VITE_BUILD_GZIP === 'true' && viteCompression(),

      // Vite legacy plugin.
      // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
      env.VITE_LEGACY === 'true' && legacy({
        targets: [
          'defaults',
          'iOS >= 10',
          'Android >= 6',
          'Chrome >= 49',
          'Safari >= 10',
          'Samsung >= 5',
          'OperaMobile >= 46',
        ],
      }),
    ],

    // Optimize dependencies.
    // https://vitejs.dev/config/#optimizedeps
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
        'lodash-es',
      ],
    },

    // Vitest config.
    // https://github.com/vitest-dev/vitest
    test: {
      include: ['tests/**/*'],
      environment: 'jsdom',
    },

    // Vite build config.
    // https://rollupjs.org/
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          // https://rollupjs.org/configuration-options/#output-manualchunks
          manualChunks: (id: string) => {
            return chunks.find(chunk => id.includes(chunk))
          },
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
    },
  }
})
