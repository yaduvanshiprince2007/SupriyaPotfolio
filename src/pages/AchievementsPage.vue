<template>
  <section class="relative min-h-[calc(100vh-5rem)] overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-100/35 blur-3xl"></div>
      <div class="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-red-100/25 blur-3xl"></div>
      <div class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-50/20 blur-3xl"></div>
    </div>

    <div class="relative mx-auto max-w-7xl">
      <div class="overflow-hidden rounded-[2rem] border border-red-200/60 bg-white/35 shadow-2xl backdrop-blur-xl transition-all duration-300">
        <div class="h-2.5 bg-gradient-to-r from-amber-300 via-red-500 to-red-700"></div>

        <div class="relative -mt-6 flex justify-center gap-3 opacity-80">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2" class="drop-shadow-md">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FEF3C7" fill-opacity="0.7"/>
          </svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1" class="drop-shadow-md">
            <circle cx="12" cy="12" r="4" fill="#FEF3C7" fill-opacity="0.7"/>
            <path d="M12 4V2M12 22V20M20 12H22M2 12H4M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="#9F1239" stroke-width="1"/>
          </svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2" class="drop-shadow-md">
            <path d="M12 5L14 9H18L15 12L16.5 16L12 13.5L7.5 16L9 12L6 9H10L12 5Z" fill="#FEF3C7" fill-opacity="0.7"/>
          </svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1" class="drop-shadow-md">
            <circle cx="12" cy="12" r="4" fill="#FEF3C7" fill-opacity="0.7"/>
            <path d="M12 4V2M12 22V20M20 12H22M2 12H4M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="#9F1239" stroke-width="1"/>
          </svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2" class="drop-shadow-md">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FEF3C7" fill-opacity="0.7"/>
          </svg>
        </div>

        <div class="p-6 md:p-10 lg:p-12">
          <GlassPanel class="mb-10">
            <div class="text-center">
              <div class="mb-5 flex items-center justify-center gap-3">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.5">
                  <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="#FEF3C7" fill-opacity="0.5"/>
                  <circle cx="12" cy="12" r="2" fill="#9F1239" fill-opacity="0.45"/>
                </svg>
                <h1 class="font-serif bg-gradient-to-r from-red-700 via-red-600 to-red-800 bg-clip-text p-3 text-4xl font-extrabold tracking-wide text-transparent md:text-5xl">
                  {{ translations.achievements.header }}
                </h1>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.5">
                  <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="#FEF3C7" fill-opacity="0.5"/>
                  <circle cx="12" cy="12" r="2" fill="#9F1239" fill-opacity="0.45"/>
                </svg>
              </div>

              <div class="mx-auto max-w-3xl">
                <p class="text-base italic text-red-700/80 md:text-lg">
                  {{ translations.achievements.subheader }}
                </p>
                <div class="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-red-300 to-red-600"></div>
              </div>
            </div>
          </GlassPanel>

          <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="space-y-6">
              <div class="rounded-[1.75rem] border border-red-200/60 bg-gradient-to-br from-white/95 to-red-50/80 p-6 shadow-md">
                <div class="mb-5 flex items-center gap-3">
                  <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.achievements.profileTag }}</p>
                    <h2 class="text-2xl font-bold text-red-800 md:text-3xl">{{ translations.achievements.profileName }}</h2>
                  </div>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                  <div v-for="item in achievementStats" :key="item.label" class="rounded-2xl border border-red-200/60 bg-white/85 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{{ item.label }}</p>
                    <p class="mt-2 text-lg font-bold text-red-800">{{ item.value }}</p>
                  </div>
                </div>

                <div class="mt-6 rounded-2xl bg-gradient-to-r from-red-700 to-red-900 p-5 text-white shadow-xl">
                  <div class="flex items-start gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mt-0.5 shrink-0">
                      <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="currentColor" fill-opacity="0.2"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor" fill-opacity="0.45"/>
                    </svg>
                    <p class="text-sm leading-relaxed text-red-50">{{ translations.achievements.profileSummary }}</p>
                  </div>
                </div>
              </div>

              <div class="rounded-[1.75rem] border border-red-200/60 bg-white/90 p-6 shadow-md">
                <div class="mb-4 flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                      <path d="M2 17L12 22L22 17" />
                      <path d="M2 12L12 17L22 12" />
                    </svg>
                  </div>
                  <h2 class="text-xl font-bold text-red-800">{{ translations.achievements.highlightsTitle }}</h2>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                  <div v-for="highlight in highlights" :key="highlight.title" class="rounded-2xl border border-red-200/60 bg-gradient-to-br from-red-50/80 to-white/90 p-4 shadow-sm">
                    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-red-500">{{ highlight.title }}</p>
                    <p class="mt-2 text-sm leading-relaxed text-gray-700">{{ highlight.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="rounded-[1.75rem] border border-red-200/60 bg-gradient-to-br from-red-50/90 to-white/90 p-6 shadow-md">
                <div class="mb-4 flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M12 2v20M5 7h14M5 17h14" />
                      <path d="M7 7c0 3 1.8 5 5 5s5-2 5-5" />
                      <path d="M7 17c0-3 1.8-5 5-5s5 2 5 5" />
                    </svg>
                  </div>
                  <h2 class="text-xl font-bold text-red-800">{{ translations.achievements.credentialsTitle }}</h2>
                </div>

                <ul class="space-y-3">
                  <li v-for="credential in credentials" :key="credential" class="flex items-center gap-3 rounded-xl bg-white/85 p-3 text-gray-700 transition hover:bg-red-50">
                    <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-200 text-xs font-bold text-red-700">✓</span>
                    <span class="text-sm leading-relaxed">{{ credential }}</span>
                  </li>
                </ul>
              </div>

              <div class="rounded-[1.75rem] bg-gradient-to-br from-red-700 to-red-900 p-6 text-white shadow-xl">
                <div class="mb-4 flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="currentColor" fill-opacity="0.2"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor" fill-opacity="0.45"/>
                  </svg>
                  <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">{{ translations.achievements.evaluatorTitle }}</h2>
                </div>

                <ul class="space-y-3">
                  <li v-for="point in evaluatorNotes" :key="point" class="flex items-start gap-3 rounded-xl bg-white/10 p-3 text-sm text-red-50">
                    <span class="text-red-300">★</span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>

              <div class="rounded-[1.75rem] border border-red-200/60 bg-white/90 p-6 shadow-md">
                <div class="flex items-center gap-3">
                  <span class="text-2xl">🏆</span>
                  <div>
                    <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.achievements.recognitionTitle }}</p>
                    <p class="mt-1 text-sm leading-relaxed text-gray-700">{{ translations.achievements.recognitionText }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12 border-t border-red-200 pt-6 text-center">
            <p class="text-xs tracking-wide text-red-400">
              ✦ {{ translations.home.footerWarmRegards }} ✦
            </p>
          </div>
        </div>

        <div class="h-2.5 bg-gradient-to-r from-amber-300 via-red-500 to-red-700"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import GlassPanel from '../components/GlassPanel.vue'
import { useLocale } from '../composables/useLocale'

const { translations } = useLocale()

const achievementStats = computed(() => translations.value.achievements.stats)
const credentials = computed(() => translations.value.achievements.credentials)
const highlights = computed(() => translations.value.achievements.highlights)
const evaluatorNotes = computed(() => translations.value.achievements.evaluatorNotes)
</script>