<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'

const { translations } = useLocale()

const educationRecords = computed(() => translations.value.education.records)
const certificates = computed(() => translations.value.education.certificates)
</script>

<template>
  <section class="min-h-[calc(100vh-5rem)] bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mb-10 rounded-3xl border border-amber-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <h1 class="text-4xl font-extrabold text-amber-900 md:text-5xl">{{ translations.education.header }}</h1>
        <p class="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">{{ translations.education.subheader }}</p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <div class="space-y-5">
          <div v-for="item in educationRecords" :key="item.degree" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-amber-500">{{ item.year }}</p>
                <h2 class="mt-3 text-2xl font-semibold text-slate-900">{{ item.degree }}</h2>
                <p class="mt-2 text-sm text-slate-500">{{ item.institution }}</p>
              </div>
              <div class="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">{{ item.percentage }}</div>
            </div>
            <p class="mt-4 text-slate-600">{{ item.details }}</p>
          </div>
        </div>

        <div class="rounded-3xl border border-slate-200 bg-gradient-to-b from-amber-50 to-white p-6 shadow-lg">
          <h2 class="text-2xl font-bold text-amber-900">{{ translations.education.professionalDevelopment }}</h2>
          <p class="mt-3 text-slate-600">{{ translations.education.professionalDetails }}</p>

          <div class="mt-6 space-y-6 rounded-3xl bg-white p-5 shadow-sm">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-amber-500">{{ translations.education.certificatesTitle }}</p>
              <ul class="mt-4 space-y-3">
                <li v-for="certificate in certificates" :key="certificate" class="flex gap-3 rounded-2xl bg-amber-50 p-4 text-slate-700">
                  <span class="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-amber-200 text-amber-800">✓</span>
                  <span>{{ certificate }}</span>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-amber-500">{{ translations.education.achievementsHeader }}</p>
              <ul class="mt-4 space-y-3 text-slate-700">
                <li v-for="achievement in translations.education.achievements" :key="achievement" class="rounded-2xl bg-slate-100 p-4">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
