<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'

const { translations } = useLocale()

const contactDetails = computed(() => translations.value.contact.details)
</script>

<template>
  <section class="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-amber-50 via-white to-rose-50 px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mb-10 rounded-3xl border border-amber-200 bg-white p-6 shadow-xl sm:p-8">
        <h1 class="text-4xl font-extrabold text-amber-900 md:text-5xl">{{ translations.contact.header }}</h1>
        <p class="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">{{ translations.contact.subheader }}</p>
        <p class="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">{{ translations.contact.message }}</p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-amber-200 sm:p-8">
          <div class="space-y-6">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-amber-500">{{ translations.contact.call }}</p>
              <p class="mt-2 text-3xl font-bold text-slate-900">{{ contactDetails.phone }}</p>
            </div>

            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-amber-500">{{ translations.contact.email }}</p>
              <p class="mt-2 text-xl font-semibold text-slate-700">{{ contactDetails.email }}</p>
            </div>

            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-amber-500">{{ translations.contact.location }}</p>
              <p class="mt-2 text-lg text-slate-700">{{ contactDetails.location }}</p>
            </div>

            <div class="rounded-3xl bg-amber-50 p-5 text-slate-800">
              <p class="text-sm uppercase tracking-[0.25em] text-amber-600">{{ translations.contact.reference }}</p>
              <p class="mt-2 font-semibold">{{ contactDetails.reference }}</p>
            </div>
          </div>
        </div>

        <div class="rounded-3xl bg-rose-50 p-6 shadow-lg ring-1 ring-rose-200 sm:p-8">
          <h2 class="text-2xl font-bold text-rose-800">{{ translations.contact.header }}</h2>
          <p class="mt-4 text-slate-700">{{ translations.contact.subheader }}</p>
          <div class="mt-6 space-y-4 rounded-3xl bg-white p-5 shadow-sm">
            <p class="text-sm uppercase tracking-[0.25em] text-rose-500">{{ translations.contact.bestTime }}</p>
            <p class="text-slate-700">{{ contactDetails.bestTime }}</p>
          </div>
          <div class="mt-6 rounded-3xl bg-slate-900 p-5 text-white shadow-xl">
            <p class="text-sm uppercase tracking-[0.25em] text-amber-200">{{ translations.contact.quickNoteTitle }}</p>
            <p class="mt-3 text-slate-100">{{ translations.contact.quickNote }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
