<template>
  <section class="relative min-h-[calc(100vh-5rem)] overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
    
    <!-- Background Decorative Elements in red -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red-100/30 blur-3xl"></div>
      <div class="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-red-200/20 blur-3xl"></div>
      <div class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50/20 blur-3xl"></div>
    </div>

    <div class="relative mx-auto max-w-6xl">
      
      <!-- Main Contact Card with Glass Effect -->
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
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" fill="#FCE7F3" fill-opacity="0.4"/>
                <path d="M22 6L12 13L2 6" stroke="#9F1239"/>
              </svg>
              <h1 class="font-serif bg-gradient-to-r from-red-700 via-red-600 to-red-800 bg-clip-text text-4xl font-extrabold tracking-wide text-transparent md:text-5xl">
                {{ translations.contact.header }}
              </h1>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.2">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" fill="#FCE7F3" fill-opacity="0.4"/>
                <path d="M22 6L12 13L2 6" stroke="#9F1239"/>
              </svg>
            </div>
            
            <div class="mx-auto max-w-2xl">
              <p class="text-base italic text-red-700/80 md:text-lg">
                {{ translations.contact.subheader }}
              </p>
              <div class="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-red-300 to-red-600"></div>
            </div>
          </div>

          <!-- Main Content Grid -->
          <div class="grid gap-8 lg:grid-cols-2">
            
            <!-- Left Column - Contact Details -->
            <div class="space-y-5">
              
              <!-- Phone Card -->
              <div class="group rounded-2xl border border-red-200/60 bg-gradient-to-br from-white/95 to-red-50/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.contact.call }}</p>
                    <p class="mt-1 text-2xl font-bold tracking-wide text-red-900">{{ contactDetails.phone }}</p>
                    <p class="mt-1 text-xs text-red-400">Call / WhatsApp available</p>
                  </div>
                </div>
              </div>

              <!-- Email Card -->
              <div class="group rounded-2xl border border-red-200/60 bg-gradient-to-br from-white/95 to-red-50/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/>
                      <path d="M22 6L12 13L2 6"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.contact.email }}</p>
                    <p class="mt-1 break-all text-base font-medium text-red-800">{{ contactDetails.email }}</p>
                  </div>
                </div>
              </div>

              <!-- Location Card -->
              <div class="group rounded-2xl border border-red-200/60 bg-gradient-to-br from-white/95 to-red-50/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="3"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.contact.location }}</p>
                    <p class="mt-1 text-base font-medium text-red-800">{{ contactDetails.location }}</p>
                  </div>
                </div>
              </div>

              <!-- Family Reference Card -->
              <div class="rounded-2xl bg-gradient-to-r from-red-100/90 to-red-50/90 p-6 shadow-md">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-700 text-white shadow-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M3 9L12 3L21 9L12 15L3 9Z"/>
                      <path d="M5 10.5V17L12 21L19 17V10.5"/>
                      <path d="M12 15V21"/>
                      <circle cx="12" cy="12" r="2"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">{{ translations.contact.reference }}</p>
                    <p class="mt-1 text-base font-semibold text-red-900">{{ contactDetails.reference }}</p>
                    <p class="mt-1 text-xs text-red-500">✦ Family legacy of honor and integrity ✦</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column - Additional Info -->
            <div class="space-y-6">
              
              <!-- Best Time Card -->
              <div class="rounded-2xl border border-red-200/60 bg-gradient-to-br from-red-50/90 to-white/90 p-6 shadow-md">
                <div class="mb-4 flex items-center gap-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F1239" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">{{ translations.contact.bestTime }}</p>
                </div>
                <p class="text-lg font-medium text-red-800">{{ contactDetails.bestTime }}</p>
                <p class="mt-2 text-sm text-red-400">(IST - Indian Standard Time)</p>
              </div>

              <!-- Quick Note Card -->
              <div class="rounded-2xl bg-gradient-to-br from-red-700 to-red-900 p-6 text-white shadow-xl">
                <div class="mb-4 flex items-center gap-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">{{ translations.contact.quickNoteTitle }}</p>
                </div>
                <p class="text-base leading-relaxed text-red-50">{{ translations.contact.quickNote }}</p>
              </div>

              <!-- Message Card -->
              <div class="rounded-2xl border border-red-200/60 bg-white/90 p-6 shadow-md">
                <div class="flex items-start gap-3">
                  <span class="text-2xl">💌</span>
                  <div>
                    <p class="text-sm font-semibold text-red-600">A gentle reminder</p>
                    <p class="mt-2 text-sm italic text-red-700">{{ translations.contact.message }}</p>
                  </div>
                </div>
              </div>

              <!-- Call to Action Button -->
              <div class="mt-4 text-center">
                <a :href="`tel:${contactDetails.phone}`" 
                   class="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-red-600 hover:to-red-700">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12" y2="18"/>
                  </svg>
                  {{ translations.contact.call }} Now
                </a>
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

const contactDetails = computed(() => translations.value.contact.details)
</script>
