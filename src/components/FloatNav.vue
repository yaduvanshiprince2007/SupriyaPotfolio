<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import ganesha from "../assets/ganesha_PNG27.png";
import { useLocale, type LocaleKey } from "../composables/useLocale";

const menuOpen = ref(false);
const route = useRoute();
const { locale, translations, setLocale } = useLocale();

const navItems = computed(() => [
  { label: translations.value.nav.home, path: "/" },
  { label: translations.value.nav.achievements, path: "/achievements" },
  { label: translations.value.nav.education, path: "/education" },
  { label: translations.value.nav.family, path: "/family" },
  { label: translations.value.nav.preferences, path: "/preferences" },
  { label: translations.value.nav.contact, path: "/contact" },
]);

const languageButtons = computed<{ code: LocaleKey; label: string }[]>(() => [
  { code: "en", label: translations.value.languageToggle.english },
  { code: "hi", label: translations.value.languageToggle.hindi },
]);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6">
    <div
      class="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border border-red-200/60 bg-white/30 px-4 py-2 shadow-2xl backdrop-blur-xl transition-all duration-300"
    >
      <!-- Logo Section -->
      <div class="flex items-center gap-3">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-200/50 transition duration-300 hover:scale-105"
        >
          <img
            :src="ganesha"
            alt="Ganesha Logo"
            class="h-8 w-8 rounded-full object-cover"
          />
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
            JAI SHREE GANESH
          </p>
          <p class="text-[10px] font-medium uppercase tracking-[0.2em] text-red-400">
            
          </p>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden items-center gap-1 md:flex">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
          :class="
            route.path === item.path
              ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md shadow-red-300/30'
              : 'text-red-700 hover:bg-red-100/80 hover:text-red-800'
          "
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- Desktop Language Toggle -->
      <div class="hidden items-center gap-2 md:flex">
        <button
          v-for="btn in languageButtons"
          :key="btn.code"
          @click="setLocale(btn.code)"
          class="rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
          :class="
            locale === btn.code
              ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md shadow-red-300/30'
              : 'bg-white/80 text-red-600 hover:bg-red-100'
          "
        >
          {{ btn.label }}
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-red-200/60 bg-white/80 text-red-600 shadow-sm transition-all duration-200 hover:bg-red-100 md:hidden"
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
      >
        <span class="sr-only">Toggle menu</span>
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-linecap="round"/>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-linecap="round"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition name="slide-fade">
      <div
        v-if="menuOpen"
        class="mt-3 rounded-2xl border border-red-200/60 bg-white/30 p-4 shadow-2xl backdrop-blur-xl"
      >
        <div class="space-y-2">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            @click="menuOpen = false"
            class="block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200"
            :class="
              route.path === item.path
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md'
                : 'text-red-700 hover:bg-red-100/80'
            "
          >
            {{ item.label }}
          </router-link>
          <div class="mt-3 flex flex-wrap gap-2 pt-2 border-t border-red-200/40">
            <button
              v-for="btn in languageButtons"
              :key="btn.code"
              @click="setLocale(btn.code)"
              class="rounded-xl px-5 py-2 text-sm font-semibold transition-all duration-200"
              :class="
                locale === btn.code
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md'
                  : 'bg-white/80 text-red-600 hover:bg-red-100'
              "
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
  transform: translateY(-10px);
}

/* Additional polish */
.router-link-active {
  position: relative;
}

@media (max-width: 768px) {
  .glass-card {
    backdrop-filter: blur(12px);
  }
}
</style>