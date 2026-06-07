<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { translations } = useLocale()
</script>

<template>
  <section class="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-rose-50 via-white to-amber-50 px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mb-10 rounded-3xl border border-white bg-white/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <h1 class="text-4xl font-extrabold text-rose-800 md:text-5xl">{{ translations.family.header }}</h1>
        <p class="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">{{ translations.family.subheader }}</p>
      </div>

      <div class="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div class="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-rose-500">{{ translations.family.labels.father }}</p>
            <h2 class="mt-3 text-2xl font-semibold text-slate-900">{{ translations.family.details.father.name }}</h2>
            <p class="mt-2 text-slate-600">{{ translations.family.details.father.occupation }}</p>
            <p class="mt-3 text-slate-500">{{ translations.family.details.father.qualities }}</p>
          </div>

          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-rose-500">{{ translations.family.labels.mother }}</p>
            <h2 class="mt-3 text-2xl font-semibold text-slate-900">{{ translations.family.details.mother.name }}</h2>
            <p class="mt-2 text-slate-600">{{ translations.family.details.mother.occupation }}</p>
            <p class="mt-3 text-slate-500">{{ translations.family.details.mother.qualities }}</p>
          </div>

          <div class="rounded-3xl bg-rose-50 p-5">
            <p class="text-sm uppercase text-rose-700">{{ translations.family.labels.siblings }}</p>
            <ul class="mt-3 space-y-3 text-slate-700">
              <li v-for="sibling in translations.family.details.siblings" :key="sibling" class="rounded-2xl bg-white p-3 shadow-sm">{{ sibling }}</li>
            </ul>
          </div>
        </div>

        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <p class="text-sm uppercase tracking-[0.25em] text-rose-500">{{ translations.family.labels.home }}</p>
          <h2 class="mt-3 text-2xl font-semibold text-slate-900">{{ translations.family.details.address }}</h2>
          <p class="mt-4 text-slate-600">{{ translations.family.details.homeDescription }}</p>

          <div class="mt-8 space-y-4">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-rose-500">{{ translations.family.labels.origin }}</p>
              <p class="mt-2 text-slate-700">{{ translations.family.details.village }}</p>
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-rose-500">{{ translations.family.labels.address }}</p>
              <p class="mt-2 text-slate-700">{{ translations.family.details.address }}</p>
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-rose-500">{{ translations.family.labels.values }}</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span v-for="value in translations.family.details.familyValues" :key="value" class="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{{ value }}</span>
              </div>
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-rose-500">{{ translations.family.strengthsHeader }}</p>
              <div class="mt-3 space-y-3">
                <div v-for="strength in translations.family.strengths" :key="strength" class="rounded-2xl bg-amber-50 p-4 text-slate-700 shadow-sm">
                  {{ strength }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
