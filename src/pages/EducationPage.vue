<template>
  <section class="relative min-h-[calc(100vh-5rem)] overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
    
    <!-- Background Decorative Elements in red -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red-100/30 blur-3xl"></div>
      <div class="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-red-200/20 blur-3xl"></div>
      <div class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50/20 blur-3xl"></div>
    </div>

    <div class="relative mx-auto max-w-6xl">
      
      <!-- Main Education Card with Glass Effect -->
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
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" fill="#FCE7F3" fill-opacity="0.4"/>
                <path d="M2 17L12 22L22 17" stroke="#9F1239"/>
                <path d="M2 12L12 17L22 12" stroke="#9F1239"/>
              </svg>
              <h1 class="font-serif bg-gradient-to-r from-red-700 via-red-600 to-red-800 bg-clip-text text-4xl font-extrabold tracking-wide text-transparent md:text-5xl">
                {{ translations.education.header }}
              </h1>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" fill="#FCE7F3" fill-opacity="0.4"/>
                <path d="M2 17L12 22L22 17" stroke="#9F1239"/>
                <path d="M2 12L12 17L22 12" stroke="#9F1239"/>
              </svg>
            </div>
            
            <div class="mx-auto max-w-2xl">
              <p class="text-base italic text-red-700/80 md:text-lg">
                {{ translations.education.subheader }}
              </p>
              <div class="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-red-300 to-red-600"></div>
            </div>
          </div>

          <!-- Main Content Grid -->
          <div class="grid gap-8 lg:grid-cols-2">
            
            <!-- Left Column - Education Records -->
            <div class="space-y-5">
              <div v-for="(item, index) in educationRecords" :key="item.degree" 
                   class="group rounded-2xl border border-red-200/60 bg-gradient-to-br from-white/95 to-red-50/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-2">
                      <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                        {{ index + 1 }}
                      </span>
                      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{{ item.year }}</p>
                    </div>
                    <h2 class="mt-3 text-xl font-bold text-red-800 md:text-2xl">{{ item.degree }}</h2>
                    <p class="mt-1 text-sm text-red-600">{{ item.institution }}</p>
                  </div>
                  <div class="rounded-full bg-gradient-to-r from-red-100 to-red-200 px-4 py-2 text-sm font-bold text-red-700 shadow-sm">
                    {{ item.percentage }}
                  </div>
                </div>
                <p class="mt-4 text-sm leading-relaxed text-gray-600">{{ item.details }}</p>
              </div>
            </div>

            <!-- Right Column - Professional Development & Certificates -->
            <div class="space-y-6">
              
              <!-- Professional Development Card -->
              <div class="rounded-2xl border border-red-200/60 bg-gradient-to-br from-red-50/90 to-white/90 p-6 shadow-md">
                <div class="mb-4 flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z"/>
                    </svg>
                  </div>
                  <h2 class="text-xl font-bold text-red-800">{{ translations.education.professionalDevelopment }}</h2>
                </div>
                <p class="text-gray-600">{{ translations.education.professionalDetails }}</p>
              </div>

              <!-- Certificates Card -->
              <div class="rounded-2xl border border-red-200/60 bg-white/90 p-6 shadow-md">
                <div class="mb-4 flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/>
                      <path d="M8 12H16M8 8H16M8 16H12"/>
                    </svg>
                  </div>
                  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.education.certificatesTitle }}</p>
                </div>
                <ul class="space-y-3">
                  <li v-for="certificate in certificates" :key="certificate" 
                      class="flex items-center gap-3 rounded-xl bg-red-50/80 p-3 text-gray-700 transition hover:bg-red-100">
                    <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-200 text-xs font-bold text-red-600">✓</span>
                    <span class="text-sm">{{ certificate }}</span>
                  </li>
                </ul>
              </div>

              <!-- Achievements Card -->
              <div class="rounded-2xl bg-gradient-to-br from-red-700 to-red-900 p-6 text-white shadow-xl">
                <div class="mb-4 flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="currentColor" fill-opacity="0.2"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor" fill-opacity="0.5"/>
                  </svg>
                  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">{{ translations.education.achievementsHeader }}</p>
                </div>
                <ul class="space-y-3">
                  <li v-for="achievement in translations.education.achievements" :key="achievement" 
                      class="flex items-start gap-3 rounded-xl bg-white/10 p-3 text-sm">
                    <span class="text-red-300">🏆</span>
                    <span>{{ achievement }}</span>
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
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'

const { translations } = useLocale()

const educationRecords = computed(() => translations.value.education.records)
const certificates = computed(() => translations.value.education.certificates)
</script>