<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { translations } = useLocale()
</script>

<template>
  <section class="min-h-[calc(100vh-5rem)] bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mb-10 rounded-3xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 p-6 shadow-2xl sm:p-8">
        <h1 class="text-4xl font-extrabold text-white md:text-5xl">{{ translations.preferences.header }}</h1>
        <p class="mt-3 max-w-2xl text-base text-amber-100 sm:text-lg">{{ translations.preferences.subheader }}</p>
      </div>

      <div class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div class="rounded-3xl bg-slate-900/95 p-6 shadow-2xl ring-1 ring-white/10 sm:p-8">
          <h2 class="text-2xl font-bold text-amber-300">{{ translations.preferences.keyPreferences }}</h2>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div v-for="pref in translations.preferences.partnerPreferences" :key="pref.label" class="rounded-3xl bg-slate-800 p-5 shadow-sm ring-1 ring-white/5">
              <p class="text-sm uppercase tracking-[0.25em] text-rose-300">{{ pref.label }}</p>
              <p class="mt-3 text-lg font-semibold text-white">{{ pref.value }}</p>
            </div>
          </div>
        </div>

        <div class="rounded-3xl bg-rose-50 p-6 shadow-2xl text-slate-950 sm:p-8">
          <h2 class="text-2xl font-bold text-rose-800">{{ translations.preferences.compatibility }}</h2>
          <p class="mt-4 text-slate-700">{{ translations.preferences.additional }}</p>
          <ul class="mt-6 space-y-3 text-slate-800">
            <li v-for="item in translations.preferences.lifestylePreferences" :key="item" class="rounded-2xl bg-white/90 p-4 shadow-sm">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
