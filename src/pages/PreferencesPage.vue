<template>
  <section class="relative min-h-[calc(100vh-5rem)] overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
    
    <!-- Background Decorative Elements in red -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red-100/30 blur-3xl"></div>
      <div class="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-red-200/20 blur-3xl"></div>
      <div class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50/20 blur-3xl"></div>
    </div>

    <div class="relative mx-auto">
      
      <!-- Main Preferences Card with Glass Effect -->
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
          <GlassPanel class="mb-10">
            <div class="text-center">
              <div class="mb-4 flex items-center justify-center gap-3">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2">
                <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" stroke="currentColor" fill="#FCE7F3" fill-opacity="0.4"/>
                <circle cx="12" cy="11" r="2" fill="#9F1239" fill-opacity="0.5"/>
              </svg>
              <h1 class="font-serif p-3 bg-gradient-to-r from-red-700 via-red-600 to-red-800 bg-clip-text text-4xl font-extrabold tracking-wide text-transparent md:text-5xl">
                {{ translations.preferences.header }}
              </h1>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2">
                <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" stroke="currentColor" fill="#FCE7F3" fill-opacity="0.4"/>
                <circle cx="12" cy="11" r="2" fill="#9F1239" fill-opacity="0.5"/>
              </svg>
            </div>
            
            <div class="mx-auto max-w-2xl">
              <p class="text-base italic text-red-700/80 md:text-lg">
                {{ translations.preferences.subheader }}
              </p>
              <div class="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-red-300 to-red-600"></div>
            </div>
            </div>
          </GlassPanel>

          <!-- Main Content Grid -->
          <div class="grid gap-8 lg:grid-cols-2">
            
            <!-- Left Column - Key Preferences -->
            <div class="space-y-6">
              <div class="rounded-2xl border border-red-200/60 bg-gradient-to-br from-white/95 to-red-50/80 p-6 shadow-md">
                <div class="mb-4 flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M20 7L9 18L4 13" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <h2 class="text-xl font-bold text-red-800">{{ translations.preferences.keyPreferences }}</h2>
                </div>
                
                <div class="grid gap-4 sm:grid-cols-2">
                  <div v-for="pref in translations.preferences.partnerPreferences" :key="pref.label" 
                       class="group rounded-xl border border-red-200/60 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{{ pref.label }}</p>
                    <p class="mt-2 text-sm font-semibold text-red-800">{{ pref.value }}</p>
                  </div>
                </div>
              </div>

              <!-- Additional Note Card -->
              <div class="rounded-2xl bg-gradient-to-br from-red-700 to-red-900 p-6 text-white shadow-xl">
                <div class="flex items-start gap-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <div>
                    <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">Note</p>
                    <p class="mt-2 text-sm leading-relaxed text-red-50">{{ translations.preferences.additional }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column - Lifestyle & Compatibility -->
            <div class="space-y-6">
              <div class="rounded-2xl border border-red-200/60 bg-gradient-to-br from-white/95 to-red-50/80 p-6 shadow-md">
                <div class="mb-4 flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z"/>
                    </svg>
                  </div>
                  <h2 class="text-xl font-bold text-red-800">{{ translations.preferences.compatibility }}</h2>
                </div>
                
                <ul class="space-y-3">
                  <li v-for="item in translations.preferences.lifestylePreferences" :key="item" 
                      class="group flex items-start gap-3 rounded-xl bg-white/80 p-3 transition-all duration-200 hover:bg-red-50">
                    <span class="mt-0.5 text-red-500 text-lg">✦</span>
                    <span class="text-sm leading-relaxed text-gray-700">{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Heartfelt Quote Card -->
              <div class="rounded-2xl border border-red-200/60 bg-gradient-to-br from-red-50/90 to-white/90 p-6 text-center shadow-md">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2" class="mx-auto mb-3 opacity-60">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <p class="text-base italic text-red-700">"{{ translations.home.partnerQuote }}"</p>
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
import GlassPanel from '../components/GlassPanel.vue'

const { translations } = useLocale()
</script>