<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useLocale, type LocaleKey } from '../composables/useLocale'

const menuOpen = ref(false)
const route = useRoute()
const { locale, translations, setLocale } = useLocale()

const navItems = computed(() => [
  { label: translations.value.nav.home, path: '/' },
  { label: translations.value.nav.education, path: '/education' },
  { label: translations.value.nav.family, path: '/family' },
  { label: translations.value.nav.preferences, path: '/preferences' },
  { label: translations.value.nav.contact, path: '/contact' }
])

const languageButtons = computed<{ code: LocaleKey; label: string }[]>(() => [
  { code: 'en', label: translations.value.languageToggle.english },
  { code: 'hi', label: translations.value.languageToggle.hindi }
])

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-3xl border border-white/70 bg-white/90 px-4 py-3 shadow-2xl backdrop-blur-xl backdrop-saturate-150">
      <div class="flex items-center gap-3">
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 text-white shadow-lg shadow-rose-200/50">
          <span class="text-lg font-black">S</span>
        </div>
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-amber-600">Supriya Biodata</p>
        </div>
      </div>

      <nav class="hidden items-center gap-2 md:flex">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-amber-300"
          :class="route.path === item.path ? 'bg-amber-500 text-white shadow-lg shadow-amber-300/30' : 'text-slate-600 hover:bg-slate-100'"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <button
          v-for="btn in languageButtons"
          :key="btn.code"
          @click="setLocale(btn.code)"
          class="rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-300"
          :class="locale === btn.code ? 'bg-amber-500 text-white shadow-lg shadow-amber-300/30' : 'bg-white text-slate-700 hover:bg-slate-100'"
        >
          {{ btn.label }}
        </button>
      </div>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
      >
        <span class="sr-only">Toggle menu</span>
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6">
          <path fill="currentColor" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6">
          <path fill="currentColor" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <transition name="slide-fade">
      <div v-if="menuOpen" class="mt-3 rounded-3xl border border-white/70 bg-white/90 p-4 shadow-2xl backdrop-blur-xl md:hidden">
        <div class="space-y-2">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            @click="menuOpen = false"
            class="block rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-amber-50"
            :class="route.path === item.path ? 'bg-amber-100 text-amber-700' : 'text-slate-700'"
          >
            {{ item.label }}
          </router-link>
          <div class="mt-2 flex flex-wrap gap-2">
            <button
              v-for="btn in languageButtons"
              :key="btn.code"
              @click="setLocale(btn.code)"
              class="rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-300"
              :class="locale === btn.code ? 'bg-amber-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'"
            >
              {{ btn.label }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
