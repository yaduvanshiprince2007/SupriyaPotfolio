<template>
  <section class="relative min-h-[calc(100vh-5rem)] overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
    
    <!-- Background Decorative Elements in red -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red-100/30 blur-3xl"></div>
      <div class="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-red-200/20 blur-3xl"></div>
      <div class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50/20 blur-3xl"></div>
    </div>

    <div class="relative mx-auto max-w-6xl">
      
      <!-- Main Family Card with Glass Effect -->
      <div class="overflow-hidden rounded-[2rem] border border-red-200/60 bg-white/30 shadow-2xl backdrop-blur-xl transition-all duration-300">
        
        <!-- Top Decorative Border - red Gradient -->
        <div class="h-2.5 bg-gradient-to-r from-red-300 via-red-500 to-red-700"></div>

        <!-- Traditional Toran Decoration in red -->
        <div class="relative -mt-6 flex justify-center gap-3 opacity-80">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2" class="drop-shadow-md">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FCE7F3" fill-opacity="0.7"/>
          </svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1" class="drop-shadow-md">
            <circle cx="12" cy="12" r="4" fill="#FCE7F3" fill-opacity="0.7"/>
            <path d="M12 4V2M12 22V20M20 12H22M2 12H4M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="#9F1239" stroke-width="1"/>
          </svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2" class="drop-shadow-md">
            <path d="M12 5L14 9H18L15 12L16.5 16L12 13.5L7.5 16L9 12L6 9H10L12 5Z" fill="#FCE7F3" fill-opacity="0.7"/>
          </svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1" class="drop-shadow-md">
            <circle cx="12" cy="12" r="4" fill="#FCE7F3" fill-opacity="0.7"/>
            <path d="M12 4V2M12 22V20M20 12H22M2 12H4M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="#9F1239" stroke-width="1"/>
          </svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2" class="drop-shadow-md">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FCE7F3" fill-opacity="0.7"/>
          </svg>
        </div>

        <div class="p-6 md:p-10 lg:p-12">
          
          <!-- Header Section in red Theme -->
          <div class="mb-10 text-center">
            <div class="mb-4 flex items-center justify-center gap-3">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2">
                <path d="M3 9L12 3L21 9L12 15L3 9Z" stroke="currentColor" fill="#FCE7F3" fill-opacity="0.4"/>
                <path d="M5 10.5V17L12 21L19 17V10.5" stroke="#9F1239"/>
                <path d="M12 15V21" stroke="#9F1239"/>
                <circle cx="12" cy="12" r="2" fill="#9F1239" fill-opacity="0.3"/>
              </svg>
              <h1 class="font-serif p-3 bg-gradient-to-r from-red-700 via-red-600 to-red-800 bg-clip-text text-4xl font-extrabold tracking-wide text-transparent md:text-5xl">
                {{ translations.family.header }}
              </h1>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2">
                <path d="M3 9L12 3L21 9L12 15L3 9Z" stroke="currentColor" fill="#FCE7F3" fill-opacity="0.4"/>
                <path d="M5 10.5V17L12 21L19 17V10.5" stroke="#9F1239"/>
                <path d="M12 15V21" stroke="#9F1239"/>
                <circle cx="12" cy="12" r="2" fill="#9F1239" fill-opacity="0.3"/>
              </svg>
            </div>
            
            <div class="mx-auto max-w-2xl">
              <p class="text-base italic text-red-700/80 md:text-lg">
                {{ translations.family.subheader }}
              </p>
              <div class="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-red-300 to-red-600"></div>
            </div>
          </div>

          <!-- Main Content Grid -->
          <div class="grid gap-8 lg:grid-cols-2">
            
            <!-- Left Column - Parents & Siblings -->
            <div class="space-y-6">
              
              <!-- Father Card -->
              <div class="group rounded-2xl border border-red-200/60 bg-gradient-to-br from-white/95 to-red-50/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M20 21V19C20 16.8 18.2 15 16 15H8C5.8 15 4 16.8 4 19V21"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.family.labels.father }}</p>
                    <h2 class="mt-2 text-xl font-bold text-red-800">{{ translations.family.details.father.name }}</h2>
                    <p class="mt-1 text-sm text-red-600">{{ translations.family.details.father.occupation }}</p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span v-for="quality in translations.family.details.father.qualities.split(' • ')" :key="quality" 
                            class="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                        {{ quality }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Mother Card -->
              <div class="group rounded-2xl border border-red-200/60 bg-gradient-to-br from-white/95 to-red-50/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M20 21V19C20 16.8 18.2 15 16 15H8C5.8 15 4 16.8 4 19V21"/>
                      <circle cx="12" cy="7" r="4"/>
                      <path d="M16 3.13C16.98 3.5 17.8 4.25 18.25 5.25" stroke="currentColor"/>
                      <path d="M8 3.13C7.02 3.5 6.2 4.25 5.75 5.25" stroke="currentColor"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.family.labels.mother }}</p>
                    <h2 class="mt-2 text-xl font-bold text-red-800">{{ translations.family.details.mother.name }}</h2>
                    <p class="mt-1 text-sm text-red-600">{{ translations.family.details.mother.occupation }}</p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span v-for="quality in translations.family.details.mother.qualities.split(' • ')" :key="quality" 
                            class="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                        {{ quality }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Siblings Card -->
              <div class="rounded-2xl bg-gradient-to-r from-red-100/90 to-red-50/90 p-6 shadow-md">
                <div class="flex items-center gap-3 mb-4">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-red-700 text-white shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M17 21V19C17 16.8 15.2 15 13 15H5C2.8 15 1 16.8 1 19V21"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21V19C22.9 16.8 21.1 15 19 15C18.1 15 17.2 15.3 16.5 15.8"/>
                      <path d="M16 3.13C16.98 3.5 17.8 4.25 18.25 5.25"/>
                    </svg>
                  </div>
                  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">{{ translations.family.labels.siblings }}</p>
                </div>
                <div class="flex flex-wrap gap-3">
                  <span v-for="sibling in translations.family.details.siblings" :key="sibling" 
                        class="rounded-full bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm">
                    {{ sibling }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Column - Home & Values -->
            <div class="space-y-6">
              
              <!-- Address Card -->
              <div class="rounded-2xl border border-red-200/60 bg-gradient-to-br from-white/95 to-red-50/80 p-6 shadow-md">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="3"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.family.labels.address }}</p>
                    <p class="mt-2 text-base font-medium text-red-800">{{ translations.family.details.address }}</p>
                  </div>
                </div>
              </div>

              <!-- Village Origin Card -->
              <div class="rounded-2xl border border-red-200/60 bg-gradient-to-br from-white/95 to-red-50/80 p-6 shadow-md">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                      <path d="M2 17L12 22L22 17"/>
                      <path d="M2 12L12 17L22 12"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.family.labels.origin }}</p>
                    <p class="mt-2 text-base font-medium text-red-800">{{ translations.family.details.village }}</p>
                  </div>
                </div>
              </div>

              <!-- Family Values Card -->
              <div class="rounded-2xl border border-red-200/60 bg-white/90 p-6 shadow-md">
                <div class="mb-4 flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 8V12L14 14"/>
                    </svg>
                  </div>
                  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.family.labels.values }}</p>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="value in translations.family.details.familyValues" :key="value" 
                        class="rounded-full bg-red-100 px-3 py-1.5 text-sm font-medium text-red-700 shadow-sm">
                    {{ value }}
                  </span>
                </div>
              </div>

              <!-- Home Description Card -->
              <div class="rounded-2xl bg-gradient-to-br from-red-700 to-red-900 p-6 text-white shadow-xl">
                <div class="flex items-center gap-3 mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M3 9L12 3L21 9L12 15L3 9Z"/>
                    <path d="M5 10.5V17L12 21L19 17V10.5"/>
                  </svg>
                  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">{{ translations.family.labels.home }}</p>
                </div>
                <p class="text-base leading-relaxed text-red-50">{{ translations.family.details.homeDescription }}</p>
              </div>

              <!-- Family Strengths Card -->
              <div class="rounded-2xl border border-red-200/60 bg-gradient-to-br from-red-50/90 to-white/90 p-6 shadow-md">
                <div class="mb-4 flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.5">
                    <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="#FCE7F3" fill-opacity="0.6"/>
                    <circle cx="12" cy="12" r="2" fill="#9F1239" fill-opacity="0.5"/>
                  </svg>
                  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.family.strengthsHeader }}</p>
                </div>
                <ul class="space-y-2">
                  <li v-for="strength in translations.family.strengths" :key="strength" 
                      class="flex items-center gap-2 rounded-xl bg-white/80 p-3 text-sm text-gray-700">
                    <span class="text-red-500 text-lg">✦</span>
                    {{ strength }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Footer Decorative Text -->
          <div class="mt-12 border-t border-red-200 pt-6 text-center">
            <p class="text-xs tracking-wide text-red-400">
              ✦ {{ translations.home.footerWarmRegards }} ✦
            </p>
          </div>
          
        </div>
        
        <!-- Bottom Decorative Border - red Gradient -->
        <div class="h-2.5 bg-gradient-to-r from-red-300 via-red-500 to-red-700"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { translations } = useLocale()
</script>